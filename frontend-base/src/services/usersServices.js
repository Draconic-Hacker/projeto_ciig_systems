// services/usersServices.js
import { api } from '@/services/api.js';

// Função para buscar todos os usuários
function buscarUsers() {
    return api.get('/users');
}

// Função para buscar um usuário por ID
function buscarUserId(id){
    return api.get(`/users/${id}`)
}

// Função para criar um novo usuário
function criarUser(user){
    return api.post('/users', user)
}

// Função para atualizar um usuário
function atualizarUser(id, user){
    return api.put(`/users/${id}`, user)
}

// Função para deletar um usuário
function deletarUser(id){
    return api.delete(`/users/${id}`)
}

// Exportando os métodos para serem usados em outros arquivos
export default{
    buscarUsers,
    buscarUserId,
    criarUser,
    atualizarUser,
    deletarUser
}