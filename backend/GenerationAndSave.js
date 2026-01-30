const crypto = require("crypto");
const db = require("./db"); // Importe sua conexão com o MySQL aqui

const gerarESalvarCodigo = async (email) => {
  // 1. Gera um código aleatório de 6 caracteres (letras e números)
    const codigo = crypto.randomBytes(3).toString("hex").toUpperCase();

  // 2. Define o tempo de expiração (Agora + 2 minutos)
    const dataExpiracao = new Date();
    dataExpiracao.setMinutes(dataExpiracao.getMinutes() + 2);

    try {
    // 3. Salva no MySQL
    // DICA: Usamos um ON DUPLICATE KEY para atualizar caso o usuário peça o código de novo
    const query = `
            INSERT INTO password_resets (email, codigo, expira_em) 
            VALUES (?, ?, ?) 
            ON DUPLICATE KEY UPDATE codigo = VALUES(codigo), expira_em = VALUES(expira_em)
        `;

    await db.execute(query, [email, codigo, dataExpiracao]);

    return codigo; // Retorna o código para ser enviado por e-mail
    } catch (error) {
    console.error("Erro ao salvar no banco:", error);
    throw error;
    }
};
module.exports = { gerarESalvarCodigo };
