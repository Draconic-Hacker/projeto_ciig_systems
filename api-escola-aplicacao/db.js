// Conexão com banco de dados MySQL usando mysql2/promise
// Comando para ativar o código por enquanto: node db.js
import mysql from 'mysql2/promise';

const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sesi',
    port: 3306,
    database: 'escoladb',
    // database: 'sistema_login_brmodelo',
    waitForConnections: true,
})


function conexao() {
    console.log('conexão com banco de dados realizada com sucesso!');
}

async function selectAlunos() {
    const [result] = await conn.query('SELECT * FROM aluno');
    console.log("O select é: ", result);
    // return result;
}


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

conexao();
// insertAlunos(aluno);
// insertAlunos({ nome: 'João', idade: 23, curso: 'Matemática' });
// selectAlunos();
// deleteAluno(3);
// selectIdAluno(2);