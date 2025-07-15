<template>
    <div class="bg-login">
<div class="container" :class="{ active: isRegisterActive }">

    <div class="form-box login"> <!-- login form -->
        <form @submit.prevent="handleLogin">
            <h1>Login</h1>
            <div class="input-box"> <!-- input de usuario -->
                <input data-testid="login-username" type="text" placeholder="Nome de Usuário" v-model="login.username" required>
                <i class='bx bxs-user cor-icon'></i>
            </div>
            <div class="input-box"> <!-- input de senha -->
                <input
                data-testid="login-password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Senha"
                v-model="login.password"
                required
                >
                <i class='bx bxs-lock-alt cor-icon'></i>
            </div>
            <div class="error-msg" v-if="loginError">{{ loginError }}</div> <!-- mensagem de erro -->
            <div class="forgot-link"> <!-- link para recuperar senha -->
                <a href="#">Esqueceu a sua Senha?</a>
            </div>
            <div class="show-password"> <!-- input para mostrar a senha -->
                <input type="checkbox" id="showPass" v-model="showPassword">
                <label for="showPass">Mostrar senha</label>
            </div>
            <button data-testid="login-button" type="submit" class="btn">Login</button> <!-- botao de login -->
            <p>ou faça login com plataformas sociais</p>
            <div class="social-icons">
                <a href="#"><i class='bx bxl-google' ></i></a>
                <a href="#"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-github' ></i></a>
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
            </div>
        </form>
    </div>

    <div class="form-box register"> <!-- register form -->
        <form @submit.prevent="handleRegister">
            <h1>Cadastro</h1>
            <div class="input-box"> <!-- input de usuario -->
                <input data-testid="register-username" type="text" placeholder="Nome de Usuário" v-model="register.username" required>
                <i class='bx bxs-user cor-icon'></i>
            </div>
            <div class="input-box"> <!-- input de email -->
                <input data-testid="register-email" type="email" placeholder="Email" v-model="register.email" required>
                <i class='bx bxs-envelope cor-icon'></i>
            </div>
            <div class="input-box"> <!-- input de senha -->
                <input 
                data-testid="register-password" 
                :type="showPasswordRegister ? 'text' : 'password'"
                placeholder="Senha" 
                v-model="register.password" 
                required>
                <i class='bx bxs-lock-alt cor-icon'></i>
            </div>
            <div class="show-password"> <!-- input para mostrar a senha -->
                <input type="checkbox" id="showPassRegister" v-model="showPasswordRegister">
                <label for="showPassRegister">Mostrar senha</label>
            </div>
            <div class="error-msg" v-if="registerError">{{ registerError }}</div> <!-- mensagem de erro -->
            <div class="success-msg" v-if="registerSuccess">{{ registerSuccess }}</div> <!-- mensagem de sucesso -->
            <button type="submit" class="btn">Cadastrar-se</button> <!-- botao de cadastro -->
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
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

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
const registerSuccess = ref('')

const showPassword = ref(false)
const showPasswordRegister = ref(false)

// Função de login
function handleLogin() {
    loginError.value = ''
    const users = JSON.parse(localStorage.getItem("users")) || []
    const userFound = users.find(user =>
        (user.username === login.value.username || user.email === login.value.username) &&
        user.password === login.value.password
    )
    if (userFound) {
        // Login válido
        alert('Login realizado!')
        isRegisterActive.value = false
        router.push('/home')
    } else {
    loginError.value = 'Usuário ou senha incorretos.'
    setTimeout(() => {
        loginError.value = ''
    }, 2000)
}
}

// Função de cadastro
function handleRegister() {
    registerError.value = ''
    const users = JSON.parse(localStorage.getItem("users")) || []

    // Validação básica
    if (!register.value.username || !register.value.email || !register.value.password) {
        registerError.value = 'Preencha todos os campos.'
        setTimeout(() => {
        registerError.value = ''
    }, 2000)
        return
    }
    // Validação de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(register.value.email)) {
        registerError.value = 'Por favor, insira um email válido.'
        setTimeout(() => {
        registerError.value = ''
    }, 2000)
        return
    }
    // Usuário já existe
    if (users.some(user => user.username.toLowerCase() === register.value.username.toLowerCase())) {
        registerError.value = 'Usuário já cadastrado.'
        setTimeout(() => {
        registerError.value = ''
    }, 2000)
        return
    }
    // Email já existe
    if (users.some(user => user.email.toLowerCase() === register.value.email.toLowerCase())) {
        registerError.value = 'Email já cadastrado.'
        setTimeout(() => {
        registerError.value = ''
    }, 2000)
        return
    }
    // Salva usuário
    users.push({
        username: register.value.username,
        email: register.value.email,
        password: register.value.password
    })
    localStorage.setItem("users", JSON.stringify(users))
    registerSuccess.value = 'Cadastro realizado com sucesso!'
    setTimeout(() => {
      registerSuccess.value = ''
    }, 2000)
    isRegisterActive.value = false
    // Limpa campos
    register.value.username = ''
    register.value.email = ''
    register.value.password = ''
}
</script>

<style scoped>
@import '@/assets/css/login.css';
</style>