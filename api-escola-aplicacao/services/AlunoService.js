import conn from "../db.js"

// função para testar a conexão com o banco de dados
export function conexao() {
  console.log("conexão com banco de dados realizada com sucesso!");
}

// função para selecionar todos os alunos
export async function selectAlunos() {
  try {
    const [result] = await conn.execute("SELECT * FROM aluno");
    console.log("O select é: ", result);
    return result;
  } catch (error) {
    console.error("Erro ao selecionar alunos: ", error);
  }
  // return result;
}

// função para inserir um aluno
export async function insertAlunos(aluno) {
  try {
    const sql = "INSERT INTO aluno (nome, idade, curso) VALUES (?, ?, ?)";
    const values = [aluno.nome, aluno.idade, aluno.curso];
    const [result] = await conn.execute(sql, values);
    console.log("O insert é: ", result);
    return result;
  } catch (error) {
    // const [result] = await conn.query('INSERT INTO aluno (nome, idade, curso) VALUES (?, ?, ?)', ['Ana', 22, 'Rio de Janeiro']);
    // console.log("O insert é: ", result);
    // return result;
    console.error("Erro ao inserir aluno:", error);
  }
}

/* // Função para inserir vários alunos
export async function insertAlunosBatch(alunosArray) {
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

let alunos = [{ nome: "Maria", idade: 21, curso: "Biologia" }];

// função para deletar um aluno pelo id
export async function deleteAluno(id) {
  try {
    const [result] = await conn.execute(
      "DELETE FROM aluno WHERE id_estudante = ?",
      [id]
    );
    console.log("Delete realizado com sucesso:", result);
    return result;
  } catch (error) {
    console.log("Erro ao deletar aluno:", error);
  }
}

// função para selecionar um aluno pelo id
export async function selectIdAluno(id) {
  try {
    const [result] = await conn.execute(
      "SELECT * FROM aluno WHERE id_estudante = ?",
      [id]
    );
    console.log("O select pelo id é: ", result);
    return result;
  } catch (error) {
    console.log("Erro ao selecionar aluno pelo id: ", error);
  }
}

export async function updateAluno(aluno) {
  try {
    const sql =
      "UPDATE aluno SET nome = ?, idade = ?, curso = ? WHERE id_estudante = ?";
    const values = [
      aluno.nome,
      aluno.idade,
      aluno.curso,
      aluno.id
    ];
    const [result] = await conn.execute(sql, values);
    console.log("Update realizado com sucesso: ", result);
    return result
  } catch (error) {
    console.error("Erro ao atualizar aluno: ", error);
  }
}

let alunoAtualizado = {
  nome: "Bia",
  idade: 19,
  curso: "Geográfia",
};

// let = aluno = { nome: 'Ana', idade: 22, curso: 'Física' };

// Chamadas de funções para testar

// conexao();
// insertAlunos(alunos);
// insertAlunos({ nome: 'João', idade: 23, curso: 'Matemática' });
// selectAlunos();
// deleteAluno(3);
// selectIdAluno(2);
// updateAluno(alunoAtualizado, 2);

