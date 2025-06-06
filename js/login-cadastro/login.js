export function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // Carrega usuários do localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Procura o usuário por username ou email
    const userFound = users.find(user =>
        (user.username === username || user.email === username) && user.password === password
    );

    if (userFound) {
        // Login válido: redirecionar para a próxima página
        window.location.href = "../html/menu-home.html";
    } else {
        // Login inválido: mostrar erro
        errorMsg.style.color = "red";
        errorMsg.textContent = "Usuário ou senha incorretos.";
        setTimeout(() => errorMsg.textContent = "", 2000);
    }
};
