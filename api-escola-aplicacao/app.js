import express from 'express';
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("<h1>Hello World my api</h1>")
})

app.get('/users', (req, res) => {
    res.send("listando usuario")
})

app.get('/users/:id', (req, res) => {
    res.send("usuario novo")
})

app.post('/users', (req, res) => {
    res.send("esse é o post")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port);
})