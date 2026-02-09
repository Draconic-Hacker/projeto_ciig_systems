import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Garantir que o .env dentro de src seja carregado mesmo quando o processo
// é iniciado a partir da pasta backend (CWD diferente).
dotenv.config({ path: join(__dirname, '..', '.env') });

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',       
    user: process.env.DB_USER || 'root',            
    password: process.env.DB_PASSWORD || '',        
    database: process.env.DB_NAME || 'ciig',       
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,

    waitForConnections: true, 
    connectionLimit: 10,    
    queueLimit: 0
});

export default pool;