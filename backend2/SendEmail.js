const nodemailer = require('nodemailer');
require('dotenv').config(); // Garante que ele leia o seu .env

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // false para a porta 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Função para enviar o código de redefinição
const enviarCodigoRecuperacao = async (emailDestino, codigo) => {
  const mailOptions = {
    from: `"Equipe de Suporte" <${process.env.EMAIL_USER}>`,
    to: emailDestino,
    subject: "Seu Código de Recuperação de Senha",
    html: `
      <div style="font-family: sans-serif; color: #333;">
        <h2>Recuperação de Conta</h2>
        <p>Você solicitou a redefinição de sua senha.</p>
        <p>Seu código é: <strong style="font-size: 1.2em; color: #007bff;">${codigo}</strong></p>
        <p>Este código expira em 2 minutos.</p>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { enviarCodigoRecuperacao };