<template>
  <div class="container">
    <!-- Login -->
    <div class="form-box login">
      <form @submit.prevent="handleLogin">
        <h1>Login</h1>
        <div class="input-box">
          <input v-model="login.username" type="text" placeholder="Nome de Usuário" required />
          <i class='bx bxs-user cor-icon'></i>
        </div>
        <div class="input-box">
          <input v-model="login.password" type="password" placeholder="Senha" required />
          <i class='bx bxs-lock-alt cor-icon'></i>
        </div>
        <div class="error-msg">{{ loginError }}</div>
        <div class="forgot-link">
          <a href="#">Esqueceu a sua Senha?</a>
        </div>
        <button type="submit" class="btn">Login</button>
        <p>ou faça login com plataformas sociais</p>
        <div class="social-icons">
          <a href="#"><i class='bx bxl-google'></i></a>
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-github'></i></a>
          <a href="#"><i class='bx bxl-linkedin'></i></a>
        </div>
      </form>
    </div>

    <!-- Cadastro -->
    <div class="form-box register">
      <form @submit.prevent="handleRegister">
        <h1>Cadastro</h1>
        <div class="input-box">
          <input v-model="register.username" type="text" placeholder="Nome de Usuário" required />
          <i class='bx bxs-user cor-icon'></i>
        </div>
        <div class="input-box">
          <input v-model="register.email" type="email" placeholder="Email" required />
          <i class='bx bxs-envelope cor-icon'></i>
        </div>
        <div class="input-box">
          <input v-model="register.password" type="password" placeholder="Senha" required />
          <i class='bx bxs-lock-alt cor-icon'></i>
        </div>
        <div class="error-msg">{{ registerError }}</div>
        <button type="submit" class="btn">Cadastrar-se</button>
        <div class="social-icons">
          <a href="#"><i class='bx bxl-google'></i></a>
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-github'></i></a>
          <a href="#"><i class='bx bxl-linkedin'></i></a>
        </div>
      </form>
    </div>

    <!-- Alternador -->
    <div class="toggle-box">
      <div class="toggle-panel toggle-left">
        <h1>Olá, seja bem-vindo!</h1>
        <p>Não tem uma conta?</p>
        <button class="btn register-btn" @click="showRegister">Registrar</button>
      </div>
      <div class="toggle-panel toggle-right">
        <h1>Bem vindo de volta!</h1>
        <p>Já tem uma conta?</p>
        <button class="btn login-btn" @click="showLogin">Conecte-se</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginCadastro",
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
      register: {
        username: "",
        email: "",
        password: ""
      },
      loginError: "",
      registerError: ""
    };
  },
  methods: {
    handleLogin() {
      if (!this.login.username || !this.login.password) {
        this.loginError = "Preencha todos os campos.";
      } else {
        this.loginError = "";
        console.log("Login:", this.login);
        // Lógica de autenticação vai aqui
      }
    },
    handleRegister() {
      if (!this.register.username || !this.register.email || !this.register.password) {
        this.registerError = "Todos os campos são obrigatórios.";
      } else {
        this.registerError = "";
        console.log("Cadastro:", this.register);
        // Lógica de cadastro vai aqui
      }
    },
    showRegister() {
      document.querySelector('.container').classList.add('active');
    },
    showLogin() {
      document.querySelector('.container').classList.remove('active');
    }
  }
};
</script>

<style scoped src="../css/SignUp-LogIn-Form.css"></style>
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
