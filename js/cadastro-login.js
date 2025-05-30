// Carrega usuários do localStorage ou inicializa vazio
let users = JSON.parse(localStorage.getItem("users")) || [];


export function register() {
    
    // Carrega usuários do localStorage ou inicializa vazio
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMsg = document.getElementById("error-msg");
    

    if (username === "" || password === "" || confirmPassword === "") {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Por favor, preencha todos os campos.";
        setTimeout(() => errorMsg.textContent = "", 2000);
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.style.color = "red";
        errorMsg.textContent = "As senhas não coincidem.";
        setTimeout(() => errorMsg.textContent = "", 2000);
        return;
    }
    
    // Verifica se o usuário já existe
    const userExists = users.some(user => user.username.toLowerCase() === username.toLowerCase());
    if (userExists) {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Usuário já cadastrado.";
        setTimeout(() => errorMsg.textContent = "", 2000);
        return;
    }

  localStorage.setItem("users", JSON.stringify(users));
    
    // Adiciona e salva no localStorage
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    
    errorMsg.style.color = "green";
    errorMsg.textContent = "Cadastro realizado com sucesso!";
    setTimeout(() => errorMsg.textContent = "", 2000);

    // Limpa os campos
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
}

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnRegister');
    if (botao) {
      botao.addEventListener('click', register);
    }
  });