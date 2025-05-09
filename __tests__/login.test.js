// // Este arquivo é a configuração do Jest para o projeto. Ele informa ao Jest como deve se comportar durante os testes.
// // Ele não deve ser modificado, a menos que você tenha certeza do que está fazendo.

// // fingindo um localstorage para os testes
// // Mock simples de localStorage para os testes
// global.localStorage = {
//   store: {},
//   getItem(key) {
//     return this.store[key] || null;
//   },
//   setItem(key, value) {
//     this.store[key] = String(value);
//   },
//   removeItem(key) {
//     delete this.store[key];
//   },
//   clear() {
//     this.store = {};
//   },
// };

// // Importando a função de login do arquivo js/login.js

// import { login } from "../js/login.js";

// // Importando o Jest para o ambiente de teste

// /** 
//  * @jest-environment jsdom
// */

// describe('Função login', () => {
//   beforeEach(() => {
//     // Zera o localStorage antes de cada teste
//     localStorage.clear();
//     // Adiciona usuários de teste ao localStorage
//     localStorage.setItem("users", JSON.stringify([
//       { username: "admin", password: "1234" },
//       { username: "usuario1", password: "senha1" }
//     ]));

//     // Cria elementos falsos para simular o DOM
//     document.body.innerHTML = `
//       <input id="username" />
//       <input id="password" />
//       <div id="error-msg"></div>
//     `;

//     // Mock do window.location.href
//     delete window.location;
//     window.location = { href: "" };
//   });

//   test('Login válido', () => {
//     // Preenche inputs simulados
//     document.getElementById("username").value = "admin";
//     document.getElementById("password").value = "1234";

//     login();

//     expect(window.location.href).toBe("../html/menu_home.html");
//   });

//   test('Senha incorreta', () => {
//     document.getElementById("username").value = "admin";
//     document.getElementById("password").value = "senhaErrada";

//     login();

//     const errorMsg = document.getElementById("error-msg");
//     expect(errorMsg.textContent).toBe("Usuário ou senha incorretos.");
//   });

//   test('Usuário inexistente', () => {
//     document.getElementById("username").value = "naoExiste";
//     document.getElementById("password").value = "qualquerSenha";

//     login();

//     const errorMsg = document.getElementById("error-msg");
//     expect(errorMsg.textContent).toBe("Usuário ou senha incorretos.");
//   });
// });

// Mock simples de localStorage para os testes
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

// Importando a função de login do arquivo js/login.js
import { login } from "../js/login.js";
// Importando o Jest para o ambiente de teste
import { jest } from '@jest/globals';

/** 
 * @jest-environment jsdom
*/


describe('Função login', () => {
  beforeEach(() => {
    // Zera o localStorage antes de cada teste
    localStorage.clear();
    localStorage.setItem("users", JSON.stringify([
      { username: "admin", password: "1234" },
      { username: "usuario1", password: "senha1" }
    ]));

    // Cria elementos simulados do DOM
    document.body.innerHTML = `
      <input id="username" />
      <input id="password" />
      <div id="error-msg"></div>
    `;

    // Mock do window.location.href
    delete window.location;
    window.location = { href: "" };
  });

  // Teste para verificar se o login é válido
  test('Login válido redireciona para menu_home.html', () => {
    document.getElementById("username").value = "admin";
    document.getElementById("password").value = "1234";

    login();

    expect(window.location.href).toBe("../html/menu_home.html");
  });

  // Testes para verificar se o login falha corretamente
  test('Senha incorreta exibe mensagem de erro', () => {
    document.getElementById("username").value = "admin";
    document.getElementById("password").value = "senhaErrada";

    login();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Usuário ou senha incorretos.");
  });

  // Teste para verificar se o usuário inexistente exibe mensagem de erro
  test('Usuário inexistente exibe mensagem de erro', () => {
    document.getElementById("username").value = "naoExiste";
    document.getElementById("password").value = "qualquerSenha";

    login();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Usuário ou senha incorretos.");
  });

  // Teste para verificar se os campos vazios exibem mensagem de erro
  test('Campos vazios exibem mensagem de erro', () => {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    login();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Usuário ou senha incorretos.");
  });

  // Teste para verificar se a mensagem de erro desaparece após o tempo esperado
  test('Mensagem de erro desaparece após o tempo esperado', () => {
    jest.useFakeTimers(); // Ativa timers falsos para simular o tempo passando

    document.getElementById("username").value = "admin";
    document.getElementById("password").value = "senhaErrada";

    login();

    const errorMsg = document.getElementById("error-msg");
    expect(errorMsg.textContent).toBe("Usuário ou senha incorretos.");

    // Simula o tempo passando
    jest.advanceTimersByTime(2000); // 2 segundos, ajustado conforme o login.js

    expect(errorMsg.textContent).toBe(""); // Depois do tempo, deve sumir
    jest.useRealTimers(); // Volta os timers normais
  });
});