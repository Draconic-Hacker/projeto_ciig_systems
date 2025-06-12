<template>
<div class="container" :class="{ active: isRegisterActive }">

    <div class="form-box login">
        <form @submit.prevent="handleLogin">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Nome de Usuário" v-model="login.username" required>
                <i class='bx bxs-user cor-icon'></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Senha" v-model="login.password" required>
                <i class='bx bxs-lock-alt cor-icon'></i>
            </div>
            <div class="error-msg" v-if="loginError">{{ loginError }}</div>
            <div class="forgot-link">
                <a href="#">Esqueceu a sua Senha?</a>
            </div>
            <button type="submit" class="btn">Login</button>
            <p>ou faça login com plataformas sociais</p>
            <div class="social-icons">
                <a href="#"><i class='bx bxl-google' ></i></a>
                <a href="#"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-github' ></i></a>
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
            </div>
        </form>
    </div>

    <div class="form-box register">
        <form @submit.prevent="handleRegister">
            <h1>Cadastro</h1>
            <div class="input-box">
                <input type="text" placeholder="Nome de Usuário" v-model="register.username" required>
                <i class='bx bxs-user cor-icon'></i>
            </div>
            <div class="input-box">
                <input type="email" placeholder="Email" v-model="register.email" required>
                <i class='bx bxs-envelope cor-icon'></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Senha" v-model="register.password" required>
                <i class='bx bxs-lock-alt cor-icon'></i>
            </div>
            <div class="error-msg" v-if="registerError">{{ registerError }}</div>
            <button type="submit" class="btn">Cadastrar-se</button>
            <div class="social-icons">
                <a href="#"><i class='bx bxl-google' ></i></a>
                <a href="#"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-github' ></i></a>
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
            </div>
        </form>
    </div>

    <div class="toggle-box">
        <div class="toggle-panel toggle-left">
            <h1>Olá, seja bem-vindo!</h1>
            <p>Não tem uma conta?</p>
            <button class="btn" @click="isRegisterActive = true" type="button">Registrar</button>
        </div>
        <div class="toggle-panel toggle-right">
            <h1>Bem vindo de volta!</h1>
            <p>Já tem uma conta?</p>
            <button class="btn" @click="isRegisterActive = false" type="button">Conecte-se</button>
        </div>
    </div>

</div>
</template>

<script setup>
import { ref } from 'vue'

const isRegisterActive = ref(false)

const login = ref({
    username: '',
    password: ''
})
const register = ref({
    username: '',
    email: '',
    password: ''
})

const loginError = ref('')
const registerError = ref('')

function handleLogin() {
    loginError.value = ''
    // Adicione sua lógica de autenticação aqui
    if (!login.value.username || !login.value.password) {
        loginError.value = 'Preencha todos os campos.'
        return
    }
    // Simulação de sucesso
    alert('Login realizado!')
}

function handleRegister() {
    registerError.value = ''
    // Adicione sua lógica de cadastro aqui
    if (!register.value.username || !register.value.email || !register.value.password) {
        registerError.value = 'Preencha todos os campos.'
        return
    }
    // Simulação de sucesso
    alert('Cadastro realizado!')
    isRegisterActive.value = false
}
</script>

<style>
@import '@/assets/css/login.css';
</style>