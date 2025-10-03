const nombre = document.getElementById("estudiante")
const edad = document.getElementById("edad")
const lista = document.getElementById("lista")

let listaEstudiantes = []

function actualizarLista(){
    lista.innerHTML = "<h1>Estudiantes</h1>"

    listaEstudiantes.forEach((estudiante) => {
        const div = document.createElement("div")
        div.className = "estudiante"
        div.onclick = () => {
            listaEstudiantes.splice(listaEstudiantes.indexOf(estudiante), 1)
            actualizarLista()
        }
        
        const pNombre = document.createElement("p")
        pNombre.textContent = `Nombre: ${estudiante.nombre}`

        const pEdad = document.createElement("p")
        pEdad.textContent = `Edad: ${estudiante.edad}`

        div.appendChild(pNombre)
        div.appendChild(pEdad)
        lista.appendChild(div)
    })
}

function registrar(){
    if(nombre.value.trim() === "" || isNaN(parseInt(edad.value))){
        alert("Por favor ingrese un nombre y una edad válida")
        return
    }

    const nuevoEstudiante = {
        nombre: nombre.value,
        edad: parseInt(edad.value)
    }

    listaEstudiantes.push(nuevoEstudiante)
    actualizarLista()

    nombre.value = ""
    edad.value = ""
    console.log(listaEstudiantes)
}


nombre.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        registrar()
    }
})

edad.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        registrar()
    }
})