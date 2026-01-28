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
import api from '@/api'

const router = useRouter()

const showPassword = ref(false)
const showPasswordRegister = ref(false)

const isRegisterActive = ref(false)
const isLoading = ref(false)

const login = ref({
    username: '',
    password: ''
})
const register = ref({
    username: '',
    email: '',
    password: ''
})

// Função de login
async function handleLogin() {
    try {
        // Validação básica
        if (!login.value.username || !login.value.password) {
            alert('Preencha todos os campos.')
            return
        }

        isLoading.value = true

        // Faz requisição para o backend
        const response = await api.post('/api/login', {
            username: login.value.username,
            password: login.value.password
        })

        // Se chegou aqui, o login foi bem-sucedido
        alert('Login realizado com sucesso!')
        
        // Salva os dados do usuário (opcional)
        localStorage.setItem('user', JSON.stringify(response.data))
        
        isRegisterActive.value = false
        // Limpa campos
        login.value.username = ''
        login.value.password = ''
        
        router.push('/sucesso')
    } catch (error) {
        if (error.response?.data?.message) {
            alert(error.response.data.message)
        } else {
            alert('Erro ao fazer login. Tente novamente.')
        }
    } finally {
        isLoading.value = false
    }
}

// Função de cadastro
async function handleRegister() {
    try {
        // Validação básica
        if (!register.value.username || !register.value.email || !register.value.password) {
            alert('Preencha todos os campos.')
            return
        }

        // Validação de email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(register.value.email)) {
            alert('Por favor, insira um email válido.')
            return
        }

        isLoading.value = true

        // Faz requisição para o backend
        const response = await api.post('/api/register', {
            username: register.value.username,
            email: register.value.email,
            password: register.value.password
        })

        // Se chegou aqui, o cadastro foi bem-sucedido
        alert('Cadastro realizado com sucesso!')
        isRegisterActive.value = false
        
        // Limpa campos
        register.value.username = ''
        register.value.email = ''
        register.value.password = ''
    } catch (error) {
        if (error.response?.data?.message) {
            alert(error.response.data.message)
        } else {
            alert('Erro ao fazer cadastro. Tente novamente.')
        }
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>
@import '@/assets/css/login.css';
</style>