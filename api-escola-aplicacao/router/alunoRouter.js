import express from 'express'
import * as alunoController from '../controllers/AlunoController.js'

const alunoRouter = express.Router()

alunoRouter
    .get('/', alunoController.listarAlunos)
    .get('/:id', alunoController.obterAlunoPorId)
    .post('/', alunoController.inserirAluno)
    .put('/:id', alunoController.atualizarAluno)
    .delete('/:id', alunoController.deletarAluno)

export default alunoRouter