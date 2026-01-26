const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const SALT_ROUNDS = 10; // Número de rounds para o hash (maior = mais seguro mas mais lento)

app.post('/api/register', async (req, res) => {
    try {
        // 1. Recebe os dados do Vue
        const { username, email, password } = req.body;

        // 2. Valida se veio tudo
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Nome de usuário, email e senha são obrigatórios' });
        }

        // 3. Verifica se usuário já existe
        const sqlCheckUsername = 'SELECT * FROM `user` WHERE username = ?';
        const [rowsUsername] = await db.query(sqlCheckUsername, [username]);
        if (rowsUsername.length > 0) {
            return res.status(400).json({ message: 'Usuário já cadastrado' });
        }

        // 4. Verifica se email já existe
        const sqlCheckEmail = 'SELECT * FROM `user` WHERE email = ?';
        const [rowsEmail] = await db.query(sqlCheckEmail, [email]);
        if (rowsEmail.length > 0) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }

        // 5. Faz o hash da senha com bcrypt
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // 6. Insere novo usuário com a senha hasheada
        const sqlInsert = 'INSERT INTO `user` (username, email, password) VALUES (?, ?, ?)';
        await db.query(sqlInsert, [username, email, hashedPassword]);

        return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
    } catch (error) {
        console.error('Erro no registro:', error);
        res.status(500).json({ message: 'Erro interno.' });
    }
});

app.post('/api/login', async (req, res) => {
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
        let sql, params;
        if (username) {
            sql = 'SELECT * FROM `user` WHERE username = ? OR email = ?';
            params = [username, username];
        } else {
            sql = 'SELECT * FROM `user` WHERE email = ?';
            params = [email];
        }

        const [rows] = await db.query(sql, params);
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

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`--- CÉREBRO (API) ---`);
    console.log(`O garçom (versão mysql2) está ouvindo na porta ${PORT}`);
    console.log(`Pronto para receber pedidos do "Rosto" (Frontend)!`);
});