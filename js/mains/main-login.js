import { register } from '../login-cadastro/cadastro-login.js';
import { login } from '../login-cadastro/login.js';
import { toggle } from '../login-cadastro/Toggle-Form.js'; // Só executa o toggle, não precisa exportar nada

toggle(); // Chama a função toggle para ativar o toggle do formulário
// Adiciona os eventos de clique aos botões de login e registro

document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btnLogin');
    const btnRegister = document.getElementById('btnRegister');

    if (btnLogin) {
        btnLogin.addEventListener('click', (event) => {
            event.preventDefault();  // Evita o reload do form
            login();
        });
    }

    if (btnRegister) {
        btnRegister.addEventListener('click', (event) => {
            event.preventDefault();  // Evita o reload do form
            register();
        });
    }
});