const range = document.getElementById("rango")
const parrafo = document.getElementById("temp")

window.onload = () => {
    range.value = 0;
    parrafo.innerText = "0°C";
    document.body.style.backgroundColor = "white";
    range.style.accentColor = 'white'
};

range.addEventListener("input", () => {
    parrafo.innerHTML = range.value + "°C"
    if (range.value <= 0) {
        document.body.style.backgroundColor = 'white'
        range.style.accentColor = 'white'
    } else if (range.value > 0 && range.value <= 25) {
        document.body.style.backgroundColor = 'cyan'
        range.style.accentColor = 'cyan'
        parrafo.innerText = "Frio " + range.value + "°C"
    } else if (range.value > 25 && range.value <= 35) {
        document.body.style.backgroundColor = 'yellow'
        range.style.accentColor = 'yellow'
        parrafo.innerText = "Normal " + range.value + "°C"
    } else if (range.value > 35 && range.value <= 50) {
        document.body.style.backgroundColor = 'orange'
        range.style.accentColor = 'orange'
        parrafo.innerText = "Templado " + range.value + "°C"
    } else if (range.value > 50 && range.value <= 80){
        document.body.style.backgroundColor = 'darkorange'
        range.style.accentColor = 'darkorange'
        parrafo.innerText = "Caliente " + range.value + "°C"
    } else if (range.value > 80 && range.value <= 100){
        document.body.style.backgroundColor = 'red'
        range.style.accentColor = 'red'
        parrafo.innerText = "Muy caliente " + range.value + "°C"
    }
})