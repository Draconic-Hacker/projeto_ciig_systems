import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// rotas
import authRouter from './routes/auth.routes.js'; // Lembre-se do .js no final se estiver usando ESM


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Essencial para o Postman conseguir enviar JSON

// --- Espaço para as Rotas ---

app.use('/auth', authRouter); 

// GET: Listar todos
app.get('/usuarios', (req: Request, res: Response) => {
    res.status(200).json({ mensagem: "Listando usuários (GET)" });
});

// GET/:id: Buscar um específico
app.get('/usuarios/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).json({ mensagem: `Buscando usuário ${id} (GET ID)` });
});

// POST: Criar
app.post('/usuarios', (req: Request, res: Response) => {
    const corpo = req.body;
    res.status(201).json({ mensagem: "Usuário criado (POST)", dados: corpo });
});

// PUT: Atualizar
app.put('/usuarios/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).json({ mensagem: `Usuário ${id} atualizado (PUT)` });
});

// DELETE: Remover
app.delete('/usuarios/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    res.status(200).json({ mensagem: `Usuário ${id} deletado (DELETE)` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
