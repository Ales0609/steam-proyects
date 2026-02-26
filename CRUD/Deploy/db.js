import mysql from "mysql2/promise"
import "dotenv/config"

export const pool = await mysql.createPool({
    url: process.env.DATABASE_URL,
    connectionLimit: 10
})

