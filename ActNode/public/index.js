const btn = document.getElementById("btn")
const nombre = document.getElementById("nombre")
const database = document.getElementById("database")

btn.addEventListener("click", async () => {
    const res = await fetch("/DB/data")
    const data = await res.json()

    nombre.innerHTML = "Name: " + data.name
    database.innerHTML = "Database: " + data.database
})
