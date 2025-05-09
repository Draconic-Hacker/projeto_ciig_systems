import { jest } from '@jest/globals';
import { register } from '../js/cadastro_login.js';

/**
 * @jest-environment jsdom
 */

// Mockando localStorage
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = String(value);
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  },
};

describe('Função register', () => {
  beforeEach(() => {
    localStorage.clear();

    document.body.innerHTML = `
      <input id="username" />
      <input id="password" />
      <input id="confirm-password" />
      <div id="error-msg"></div>
    `;
  });

  test('Cadastro correto no localStorage', () => {
    document.getElementById("username").value = "novoUsuario";
    document.getElementById("password").value = "senha123";
    document.getElementById("confirm-password").value = "senha123";

    register();

    const users = JSON.parse(localStorage.getItem("users"));
    expect(users).toEqual([{ username: "novoUsuario", password: "senha123" }]);

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Cadastro realizado com sucesso!");
  });

  test('Campos vazios exibem mensagem de erro', () => {
    register();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Por favor, preencha todos os campos.");
  });

  // 3, 4, 5: apenas 1/3 preenchido
  test('Somente nome de usuário preenchido exibe erro', () => {
    document.getElementById("username").value = "nome";

    register();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Por favor, preencha todos os campos.");
  });

  test('Somente senha preenchida exibe erro', () => {
    document.getElementById("password").value = "senha123";

    register();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Por favor, preencha todos os campos.");
  });

  test('Somente confirmar senha preenchida exibe erro', () => {
    document.getElementById("confirm-password").value = "senha123";

    register();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Por favor, preencha todos os campos.");
  });

  // 6, 7, 8: 2/3 preenchido
  test('Nome de usuário + senha preenchidos, confirmar senha vazio, exibe erro', () => {
    document.getElementById("username").value = "nome";
    document.getElementById("password").value = "senha123";

    register();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Por favor, preencha todos os campos.");
  });

  test('Nome de usuário + confirmar senha preenchidos, senha vazia, exibe erro', () => {
    document.getElementById("username").value = "nome";
    document.getElementById("confirm-password").value = "senha123";

    register();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Por favor, preencha todos os campos.");
  });

  test('Senha + confirmar senha preenchidos, nome de usuário vazio, exibe erro', () => {
    document.getElementById("password").value = "senha123";
    document.getElementById("confirm-password").value = "senha123";

    register();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Por favor, preencha todos os campos.");
  });

  // 9. Senhas diferentes
  test('Senha e confirmar senha diferentes exibem mensagem de erro', () => {
    document.getElementById("username").value = "nome";
    document.getElementById("password").value = "senha123";
    document.getElementById("confirm-password").value = "senha456";

    register();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("As senhas não coincidem.");
  });

  // 10. Verificar que mensagem some depois de 2 segundos
  test('Mensagem de erro/cadastro some após 2 segundos', () => {
    jest.useFakeTimers();

    document.getElementById("username").value = "nome";
    document.getElementById("password").value = "senha123";
    document.getElementById("confirm-password").value = "senha123";

    register(); // cadastro válido

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Cadastro realizado com sucesso!");

    jest.advanceTimersByTime(2000);

    expect(errorMsg.textContent).toBe("");
  });
});
