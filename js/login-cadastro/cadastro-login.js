import { removeActiveClass} from "./Toggle-Form.js"; // Importa a função removeActiveClass
// Carrega usuários do localStorage ou inicializa vazio
let users = JSON.parse(localStorage.getItem("users")) || [];


export function register() {
    
    // Carrega usuários do localStorage ou inicializa vazio
    const username = document.getElementById("username2").value.trim();
    const password = document.getElementById("password2").value;
    const email = document.getElementById("email").value;
    const errorMsg = document.getElementById("error-msg2");
    

    if (username === "" || password === "" || email === "") {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Por favor, preencha todos os campos.";
        setTimeout(() => errorMsg.textContent = "", 2000);
        return;
    }

    // Verifica se o email contém "@" e um ponto após o "@"
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Por favor, insira um email válido.";
      setTimeout(() => errorMsg.textContent = "", 2000);
      return;
    }
    
    // Verifica se o usuário já existe
    const userExists = users.some(user => user.username.toLowerCase() === username.toLowerCase());
    if (userExists) {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Usuário já cadastrado.";
        setTimeout(() => errorMsg.textContent = "", 2000);
        // Limpa os campos
        document.getElementById("username2").value = "";
        document.getElementById("password2").value = "";
        document.getElementById("email").value = "";
        return;
    }
    
    // Verifica se o email já existe
    const emailExists = users.some(user => user.email.toLowerCase() === email.toLowerCase());
    if (emailExists) {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Email já cadastrado.";
        setTimeout(() => errorMsg.textContent = "", 2000);
        // Limpa os campos
        document.getElementById("username2").value = "";
        document.getElementById("password2").value = "";
        document.getElementById("email").value = "";
        return;
    }

  // Adiciona e salva no localStorage
  users.push({ username, password, email });
  localStorage.setItem("users", JSON.stringify(users));
    
    errorMsg.style.color = "green";
    errorMsg.textContent = "Cadastro realizado com sucesso!";
    setTimeout(() => errorMsg.textContent = "", 2000);

    // Limpa os campos
    document.getElementById("username2").value = "";
    document.getElementById("password2").value = "";
    document.getElementById("email").value = "";

    removeActiveClass(); // Remove a classe ativa do container para voltar ao formulário de login
    document.getElementById("username").value = username; // Preenche o campo de usuário do login com o novo usuário
    document.getElementById("password").value = password; // Preenche o campo de senha do login com a nova senha
}
