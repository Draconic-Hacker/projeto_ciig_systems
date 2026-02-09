import { Router } from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import db from '../db/db.js';
import 'dotenv/config.js';
import { gerarESalvarCodigo } from "./Generation&Save.routes.js"; 
import { enviarCodigoRecuperacao } from "./SendEmail.routes.js"; 

const authRouter = Router();

const SALT_ROUNDS = 10; // Número de rounds para o hash (maior = mais seguro mas mais lento)

/* ====================== * ====================== */
/* ====================== * ====================== */

// Rota de registro de usuário
authRouter.post('/registro', async (req: Request, res: Response) => {
    try {
        // 1. Recebe os dados do Vue
        const { username, email, password } = req.body;

        // 2. Valida se veio tudo
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Nome de usuário, email e senha são obrigatórios' });
        }

        // 3. Verifica se usuário já existe
        const sqlCheckUsername = 'SELECT * FROM `user` WHERE username = ?';
        const [rowsUsername] = await db.query<any[]>(sqlCheckUsername, [username]);
        if (rowsUsername.length > 0) {
            return res.status(400).json({ message: 'Usuário já cadastrado' });
        }

        // 4. Verifica se email já existe
        const sqlCheckEmail = 'SELECT * FROM `user` WHERE email = ?';
        const [rowsEmail] = await db.query<any[]>(sqlCheckEmail, [email]);
        if (rowsEmail.length > 0) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }

        // 5. Faz o hash da senha com bcrypt
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        
        // 6. Insere novo usuário com a senha hasheada
        const sqlInsert = 'INSERT INTO `user` (username, email, password) VALUES (?, ?, ?)';
        await db.query<any[]>(sqlInsert, [username, email, hashedPassword]);
        
        return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).json({ message: 'Erro interno.' });
    }
});

/* ====================== * ====================== */
/* ====================== * ====================== */

// Rota de login de usuário
authRouter.post('/login', async (req: Request, res: Response) => {
    try {
        // 1. Recebe os dados do Vue
        const { username, email, password } = req.body;

        // 2. Valida se veio tudo
        if (!password) {
            return res.status(400).json({ message: 'Senha é obrigatória' });
        }

        if (!username && !email) {
            return res.status(400).json({ message: 'Nome de usuário ou email é obrigatório' });
        }

        // 3. Busca no Banco (SQL) - aceita username ou email
        let sql: string, params: any[];
        if (username) {
            sql = 'SELECT * FROM `user` WHERE username = ? OR email = ?';
            params = [username, username];
        } else {
            sql = 'SELECT * FROM `user` WHERE email = ?';
            params = [email];
        }

        const [rows] = await db.query<any[]>(sql, params);
        const user = rows[0];

        // 4. Verifica se usuário existe e compara a senha com bcrypt
        if (!user) {
            return res.status(401).json({ message: 'Usuário/email ou senha incorreta' });
        }

        // Compara a senha fornecida com o hash armazenado no banco
        const senhaCorreta = await bcrypt.compare(password, user.password);

        if (!senhaCorreta) {
            return res.status(401).json({ message: 'Usuário/email ou senha incorreta' });
        }

        // 5. Devolve o usuário logado (sem a senha)
        const { password: _, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: 'Erro interno.' });
    }
});

/* ====================== * ====================== */
/* ====================== * ====================== */

// Rota para solicitar código de recuperação de senha
authRouter.post('/esqueci-senha', async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "O e-mail é obrigatório!" });
    }

    try {
        // 1. Verifica se o email existe no banco
        const sqlCheckEmail = 'SELECT * FROM `user` WHERE email = ?';
        const [rowsEmail] = await db.query<any[]>(sqlCheckEmail, [email]);
        if (rowsEmail.length === 0) {
            return res.status(400).json({ message: 'E-mail não encontrado no banco de dados' });
        }

        // 2. Gera e salva o código no MySQL
        const codigo = await gerarESalvarCodigo(email);

        // 3. Dispara o e-mail com o código
        await enviarCodigoRecuperacao(email, codigo);

        // 4. Responde ao Front-end
        res.status(200).json({ message: "Código enviado com sucesso!" });

    } catch (error) {
        console.error("Erro no processo de recuperação:", error);
        res.status(500).json({ message: "Erro interno no servidor ao enviar código." });
    }
});

/* ====================== * ====================== */
/* ====================== * ====================== */

// Rota para validar o código de recuperação de senha
authRouter.post('/validar-codigo', async (req: Request, res: Response) => {
    const { email, codigo } = req.body;

    try {
        // Busca o código no banco verificando se ainda é válido (tempo)
        const query = `
            SELECT * FROM password_forgot 
            WHERE email = ? AND codigo = ? AND expira_em > NOW()
        `;
        
        const [results] = await db.query<any[]>(query, [email, codigo]);

        if (results.length > 0) {
            // Código válido!
            res.status(200).json({ message: "Código validado com sucesso!" });
        } else {
            // Código errado ou expirado
            res.status(400).json({ message: "Código inválido ou expirado. Tente novamente." });
        }
    } catch (error) {
        res.status(500).json({ message: "Erro ao validar código." });
    }
});

/* ====================== * ====================== */
/* ====================== * ====================== */

// Rota para atualizar a senha
authRouter.post('/atualizar-senha', async (req: Request, res: Response) => {
    const { email, codigo, novaSenha } = req.body;
    const saltRounds = 10;

    try {
        // 1. Verificação final: o código existe para este email?
        // (Já foi validado com tempo na rota /api/validar-codigo)
        const [validacao] = await db.query<any[]>(
            "SELECT * FROM password_forgot WHERE email = ? AND codigo = ?",
            [email, codigo]
        );

        if (validacao.length === 0) {
            return res.status(403).json({ message: "Código inválido ou sessão expirada. Comece o processo novamente." });
        }

        // 2. Hash da nova senha com Bcrypt
        const hash = await bcrypt.hash(novaSenha, saltRounds);

        // 3. Atualiza na tabela de USUÁRIOS
        await db.execute(
            "UPDATE `user` SET `password` = ? WHERE email = ?",
            [hash, email]
        );

        // 4. Limpa o código usado para que não seja usado de novo
        await db.execute("DELETE FROM password_forgot WHERE email = ?", [email]);

        res.status(200).json({ message: "Senha atualizada com sucesso!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar a senha." });
    }
});

export default authRouter;
