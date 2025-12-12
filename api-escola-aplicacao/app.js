import express from "express";
import alunoRouter from "./router/alunoRouter.js";
const app = express();
const port = 3000;
//middleware para envio de dados json
app.use(express.json());
//middleware para envio e recebimento de dados simples de formulario
app.use(express.urlencoded({ extended: true }));

app.use('/aluno', alunoRouter)

app.get("/", (req, res) => {
  res.send("<h1>Hello World my api</h1>");
});

/* 


//metodo get para o endpoint /users
app.get("/users", (req, res) => {
  res.send("Listando usuarios");
});
//metodo get para o endpoint /users com parametro
app.get("/users/:id", (req, res) => {
  res.send("Usuario novo");
});
//metodo post para o endpoint /users
app.post("/users", (req, res) => {
  console.log("Dados JSON recebidos:", req.body);
  //res.send(`Dados JSON processados: ${JSON.stringify(req.body)}`)
  res.status(200).json(req.body);
});
//metodo put para o endpoint /users
app.put("/users/:id", (req, res) => {
  res.send("Esse é o put");
});
//metodo delete para o endpoint /users
app.delete("/users/:id", (req, res) => {
  res.send("Esse é o delete");
}); */

app.listen(port, () => {
  console.log("Servidor rodando na porta ", port);
});