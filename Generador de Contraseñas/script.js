class passwordGenerator {
    constructor() {
        this.minus = 'abcdefghijklmnopqrstuvwxyz';
        this.mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.numeros = '0123456789';
        this.simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
    }
    generar(longitud, usarMayus, usarMinus, usarNums, usarSimbolos) {
        let caracteres = "";

        if (usarMayus) caracteres += this.mayus;
        if (usarMinus) caracteres += this.minus;
        if (usarNums) caracteres += this.numeros;
        if (usarSimbolos) caracteres += this.simbolos;

        if (caracteres.length === 0) return "Selecciona al menos una opción"


        let constraseña = ""

        for(let i = 0; i < longitud; i++){
            const random = Math.floor(Math.random() * caracteres.length);
            constraseña += caracteres[random];
        }

        return constraseña
    }
}

const generador = new passwordGenerator()

const output = document.getElementById("output")
const btn = document.getElementById("generateBtn")
const copiarBtn = document.getElementById("copiarBtn")
const barra = document.getElementById("barra-interna")
const textoFuerza = document.getElementById("texto-fuerza")
const historialDiv = document.getElementById("historial")


// Cargar Historial

let historial = JSON.parse(localStorage.getItem("historialPass")) || []
pintarHistorial()

// Cargar la Ultima Contraseña

const lastPass = localStorage.getItem("ultimaPassword")
if (lastPass) {
    output.textContent = lastPass
    evaluarFuerza(lastPass)
}

// Generar
btn.addEventListener("click", () => {
    const length = Number(document.getElementById("length").value)
    const mayus = document.getElementById("mayus").checked
    const minus = document.getElementById("minus").checked
    const nums = document.getElementById("numeros").checked
    const simbolos = document.getElementById("simbolos").checked

    const password = generador.generar(length, mayus, minus, nums, simbolos)

    output.textContent = password


    // Guardar en LocalStorage
    localStorage.setItem("ultimaPassword", password)

    // Guardar en Historial
    historial.push(password)
    localStorage.setItem("historialPass", JSON.stringify(historial))

    pintarHistorial()

    evaluarFuerza(password)
})

// Copiar Contraseña

copiarBtn.addEventListener("click", () => {
    const text = output.textContent

    navigator.clipboard.writeText(text)
    .then(() =>{
        copiarBtn.textContent = "Copiado!"
        setTimeout(() => copiarBtn.textContent = "Copiar", 1500)
    })
})


// Función Historial

function pintarHistorial() {
    historialDiv.innerHTML = ""
    historial.slice().reverse().forEach(pass => {
        const div = document.createElement("div")
        div.textContent = pass
        historialDiv.appendChild(div)
    })
}


// Evaluar Contraseña

function evaluarFuerza(password){
    let puntos = 0

    if (password.length >= 8) puntos++
    if (/[A-Z]/.test(password)) puntos++;
    if (/[a-z]/.test(password)) puntos++;
    if (/\d/.test(password)) puntos++;
    if (/[!@#$%^&*()_\-+=<>?{}[\]]/.test(password)) puntos++;

    if (puntos <= 2){
        barra.style.width = "30%"
        barra.style.backgroundColor = "red"
        textoFuerza.textContent = "Débil"
    } else if (puntos === 3 || puntos === 4){
        barra.style.width = "60%"
        barra.style.backgroundColor = "orange"
        textoFuerza.textContent = "Media"
    } else {
        barra.style.width = "100%"
        barra.style.backgroundColor = "green"
        textoFuerza.textContent = "Fuerte"
    }
}


// Botón para borrar historial y LocalStorage
const borrarHistorialBtn = document.getElementById("borrarHistorialBtn");

borrarHistorialBtn.addEventListener("click", () => {
    localStorage.removeItem("historialPass");
    localStorage.removeItem("ultimaPassword");

    historial = [];
    historialDiv.innerHTML = "";

    output.textContent = "";
    barra.style.width = "0%";
    textoFuerza.textContent = "-";

    borrarHistorialBtn.textContent = "Historial eliminado";
    setTimeout(() => borrarHistorialBtn.textContent = "Borrar Historial", 1500);
});
