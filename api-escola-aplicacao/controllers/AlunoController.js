import * as alunoService from "../services/AlunoService.js";

export async function listarAlunos(req, res) {
    try {
        const aluno = await alunoService.selectAlunos();
        if (aluno.length === 0) {
            return res.status(404).json({mensagem: "Nenhum aluno encontrado!"});
        } else {
            return res.status(200).json({ aluno });
        }
    } catch (error) {
        console.error("Erro ao listar alunos:", error);
    }
}

export async function obterAlunoPorId(req, res) {
    try {
        const id = Number(req.params.id);
        const alunos = await alunoService.selectIdAluno(id);
        if (alunos === undefined || alunos === null) {
            return res.status(404).json({ mensagem: "Aluno inexistente!" });
        } else {
            return res.status(200).json({ alunos });
        }
    } catch (error) {
        console.error("Erro ao obter aluno por ID:", error);
    }
}

export async function inserirAluno(req, res) {
    try {
        const aluno = await alunoService.insertAlunos(req.body);
        return res.status(201).json({ aluno });
        console.log("Aluno adicionado com sucesso:", aluno);
    } catch (error) {
        console.error("Erro ao adicionar aluno:", error);
    }
}

export async function atualizarAluno(req, res) {
    try { 
        const id = Number(req.params.id);
        const alunoEditado = { ...req.body, id };
        const alunoAtualizado = await alunoService.updateAluno(alunoEditado);
        if (alunoAtualizado === undefined || alunoAtualizado === null) {
            return res.status(404).json({ mensagem: "Aluno inexistente!" });
        } else {
            return res.status(201).json({ alunoAtualizado });
        }
        console.log("Aluno atualizado com sucesso:", aluno);
    } catch { 
        console.error("Erro ao atualizar aluno:", error);
      }
}

export async function deletarAluno(req, res) {
    try {
        const id = Number(req.params.id);
        const alunoDeletado = await alunoService.deleteAluno(id);
        if (id === undefined || id === null || alunoDeletado === undefined || alunoDeletado === null) {
            return res.status(404).json({ mensagem: "Id invalido ou não encontrado!" });
        } else {
            return res.status(200).json({ mensagem: "Aluno deletado com sucesso!" });
        }
        return res.status(200).json({ aluno });
        console.log("Aluno deletado com sucesso:", aluno);
    } catch (error) {
        console.error("Erro ao deletar aluno:", error);
    }
}