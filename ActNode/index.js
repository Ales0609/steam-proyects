import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(express.static("public"))


app.get("/DB/data", (req, res) => {
    res.json({
        name: process.env.NAME,
        database: process.env.DATABASE_NAME
    })
})

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000")
})
