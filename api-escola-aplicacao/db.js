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

export default conn