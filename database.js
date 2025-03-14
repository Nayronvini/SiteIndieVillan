import pkg from "pg";
const { Client } = pkg;

const DATABASE_URL =
    "postgresql://postgres:[YOUR-PASSWORD]@db.kijyoxpwwjvykzetgswl.supabase.co:5432/postgres";

// Criando um cliente para conexão com o banco de dados
const client = new Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // 🔹 Necessário para conectar ao Supabase
});

async function connectDB() {
    try {
        await client.connect();
        console.log("🟢 Conectado ao banco de dados!");
    } catch (error) {
        console.error("🔴 Erro ao conectar:", error);
    }
}

// 🔹 Conectar automaticamente ao iniciar
connectDB();

export default client;
