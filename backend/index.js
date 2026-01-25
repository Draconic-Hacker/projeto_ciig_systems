const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`--- CÉREBRO (API) ---`);
    console.log(`O garçom (versão mysql2) está ouvindo na porta ${PORT}`);
    console.log(`Pronto para receber pedidos do "Rosto" (Frontend)!`);
});