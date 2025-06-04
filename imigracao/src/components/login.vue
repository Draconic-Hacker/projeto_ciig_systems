<template>
  <div class="container">
    <!-- LOGIN -->
    <div class="form-box login">
      <form @submit.prevent>
        <h1>Login</h1>

        <div class="input-box">
          <input type="text" placeholder="Nome de Usuário" v-model="login.username" required />
          <i class="bx bxs-user cor-icon"></i>
        </div>

        <div class="input-box">
          <input type="password" placeholder="Senha" v-model="login.password" required />
          <i class="bx bxs-lock-alt cor-icon"></i>
        </div>

        <div class="error-msg">{{ loginError }}</div>

        <div class="forgot-link">
          <a href="#">Esqueceu a sua Senha?</a>
        </div>

        <button type="button" class="btn" @click="handleLogin">Login</button>

        <p>ou faça login com plataformas sociais</p>

        <div class="social-icons">
          <a href="#"><i class="bx bxl-google"></i></a>
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-github"></i></a>
          <a href="#"><i class="bx bxl-linkedin"></i></a>
        </div>
      </form>
    </div>

    <!-- REGISTRO -->
    <div class="form-box register">
      <form @submit.prevent>
        <h1>Cadastro</h1>

        <div class="input-box">
          <input type="text" placeholder="Nome de Usuário" v-model="register.username" required />
          <i class="bx bxs-user cor-icon"></i>
        </div>

        <div class="input-box">
          <input type="email" placeholder="Email" v-model="register.email" required />
          <i class="bx bxs-envelope cor-icon"></i>
        </div>

        <div class="input-box">
          <input type="password" placeholder="Senha" v-model="register.password" required />
          <i class="bx bxs-lock-alt cor-icon"></i>
        </div>

        <div class="error-msg">{{ registerError }}</div>

        <button type="button" class="btn" @click="handleRegister">Cadastrar-se</button>

        <div class="social-icons">
          <a href="#"><i class="bx bxl-google"></i></a>
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-github"></i></a>
          <a href="#"><i class="bx bxl-linkedin"></i></a>
        </div>
      </form>
    </div>

    <!-- TOGGLE -->
    <div class="toggle-box">
      <div class="toggle-panel toggle-left">
        <h1>Olá, seja bem-vindo!</h1>
        <p>Não tem uma conta?</p>
        <button class="btn register-btn">Registrar</button>
      </div>

      <div class="toggle-panel toggle-right">
        <h1>Bem vindo de volta!</h1>
        <p>Já tem uma conta?</p>
        <button class="btn login-btn">Conecte-se</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  data() {
    return {
      login: {
        username: '',
        password: ''
      },
      register: {
        username: '',
        email: '',
        password: ''
      },
      loginError: '',
      registerError: ''
    };
  },
  methods: {
    handleLogin() {
      if (!this.login.username || !this.login.password) {
        this.loginError = 'Preencha todos os campos.';
      } else {
        this.loginError = '';
        alert(`Login de ${this.login.username}`);
        // lógica de login aqui
      }
    },
    handleRegister() {
      if (!this.register.username || !this.register.email || !this.register.password) {
        this.registerError = 'Preencha todos os campos.';
      } else {
        this.registerError = '';
        alert(`Cadastro de ${this.register.username}`);
        // lógica de registro aqui
      }
    }
  }
};
</script>

<style scoped>
/* você pode copiar o conteúdo de SignUp-LogIn-Form.css aqui ou importar o arquivo */
</style>
