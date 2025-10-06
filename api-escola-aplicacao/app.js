import express from 'express';
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("<h1>Hello World my api</h1>")
})

app.get('/usuarios', (req, res) => {
    res.send("listando usuario")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port);
})