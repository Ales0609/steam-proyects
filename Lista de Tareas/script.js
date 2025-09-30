const tareaInput = document.getElementById("tareaInput")
const contenedorTareas = document.getElementById("listaTareas")

const tareas = []
function actualizarListado(){
    contenedorTareas.innerHTML = ""
    tareas.forEach((tarea, index) => {
        const div = document.createElement("div")
        div.className = "tarea"

        const texto = document.createElement("p")
        texto.textContent = tarea

        const eliminar = document.createElement("button")
        eliminar.innerHTML = "🗑️"
        eliminar.className = "delete"
        eliminar.onclick = function(){
            tareas.splice(index, 1)
            actualizarListado()
        }
        div.appendChild(texto)
        div.appendChild(eliminar)

        contenedorTareas.appendChild(div)
    })
}

function agregarTarea(){
    if(tareaInput.value.trim() === "") return
    tareas.push(tareaInput.value)
    actualizarListado()
    tareaInput.value = ""
}

tareaInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        agregarTarea()
    }
})