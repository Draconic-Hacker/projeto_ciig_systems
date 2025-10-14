// Comando para ativar o código por enquanto: node db.js

// Conexão com banco de dados MySQL usando mysql2/promise
import mysql from 'mysql2/promise';

// Configuração da conexão com o banco de dados
const conn = mysql.createPool({
    host: 'localhost',
    // user do seu banco de dados
    user: 'root',
    // senha do seu banco de dados
    password: 'sesi',
    // porta do seu banco de dados
    port: 3306,
    // nome do seu banco de dados
    database: 'escoladb',
    // database: 'sistema_login_brmodelo',
    // específica que a conexão pode ter múltiplas conexões ao mesmo tempo
    waitForConnections: true,
})

// função para testar a conexão com o banco de dados
function conexao() {
    console.log('conexão com banco de dados realizada com sucesso!');
}

// função para selecionar todos os alunos
async function selectAlunos() {
    const [result] = await conn.query('SELECT * FROM aluno');
    console.log("O select é: ", result);
    // return result;
}

// função para inserir um aluno
async function insertAlunos(aluno) {
    try {
        const sql = 'INSERT INTO aluno (nome, idade, curso) VALUES (?, ?, ?)';
        const values = [
            aluno.nome,
            aluno.idade,
            aluno.curso,
        ]
        const [result] = await conn.query(sql, values);
        console.log("O insert é: ", result);
    }
        // const [result] = await conn.query('INSERT INTO aluno (nome, idade, curso) VALUES (?, ?, ?)', ['Ana', 22, 'Rio de Janeiro']);
        // console.log("O insert é: ", result);
        // return result;
    catch (error) {
        console.error('Erro ao inserir aluno:', error);        
    }

}

/* // Função para inserir vários alunos
async function insertAlunosBatch(alunosArray) {
    const sql = 'INSERT INTO aluno (nome, idade, curso) VALUES ?';
    const values = alunosArray.map(a => [a.nome, a.idade, a.curso]);
    try {
        const [result] = await conn.query(sql, [values]);
        console.log("Batch insert:", result);
    } catch (error) {
        console.error('Erro ao inserir alunos em lote:', error);
    }
    } 
    
    // Exemplo de uso:
    insertAlunosBatch(alunos);
    */

let alunos = [
    { nome: 'Maria', idade: 21, curso: 'Biologia' },
    { nome: 'Carlos', idade: 22, curso: 'Química' },
    { nome: 'Fernanda', idade: 20, curso: 'História' }
];

// função para deletar um aluno pelo id
async function deleteAluno(id) {
    try {
        const [result] = await conn.execute('DELETE FROM aluno WHERE id_estudante = ?', [id]);
        console.log("Delete realizado com sucesso: ", result);
    } catch (error) {
        console.log('Erro ao deletar aluno:', error);
    }
}

// função para selecionar um aluno pelo id
async function selectIdAluno(id) {
    try {
        const [result] = await conn.execute("SELECT * FROM aluno WHERE id_estudante = ?", [id]);
        console.log("O select pelo id é: ", result);
    } catch (error) {
        console.log('Erro ao selecionar aluno pelo id: ', error);
    }
}

async function updateAluno(aluno) {
    try {
        const [result] = await conn.execute('UPDATE aluno SET nome = ?, idade = ?, curso = ? WHERE id_estudante = ?',
            [
                aluno.nome,
                aluno.idade,
                aluno.curso,
                aluno.id_estudante]);
        console.log("Update realizado com sucesso: ", result);
    } catch (error) {
        console;log('Erro ao atualizar aluno: ', error);
    }
}

conexao();
// insertAlunos(aluno);
// insertAlunos({ nome: 'João', idade: 23, curso: 'Matemática' });
// selectAlunos();
// deleteAluno(3);
// selectIdAluno(2);
updateAluno({ id_estudante: 1, nome: 'Ana Clara', idade: 23, curso: 'Física' });