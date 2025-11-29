// Obtención de Elementos del DOM 
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const saveButton = document.getElementById("save");

const almacenar = localStorage.getItem('data')
if(almacenar !== null){
    const datos = JSON.parse(almacenar)
    nombre.value = datos.nombre
    apellido.value = datos.apellido
    edad.value = datos.edad
}

// Guardar los datos

function guardar(){
    const nombreValue = nombre.value
    const apellidoValue = apellido.value
    const edadValue = edad.value

    localStorage.setItem('data', JSON.stringify({
        nombre: nombreValue,
        apellido: apellidoValue,
        edad: edadValue
    }))
}

saveButton.addEventListener('click', guardar)