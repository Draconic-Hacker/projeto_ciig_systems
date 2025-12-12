import { register } from '../login-cadastro/cadastro-login.js';
import { login } from '../login-cadastro/login.js';
import '../login-cadastro/Toggle-Form.js'; // Só executa o toggle, não precisa exportar nada

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