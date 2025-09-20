function CalcularIMC(){
// Obtenemos los valores de peso y altura del input.
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

// Muestra una alerta en caso de que esten vacios los campos de peso y altura.
    if (peso === '' || altura === '') {
        alert("Por favor, ingresa el peso y la altura.");
        return;
    }

// Convierte la altura de centímetros a metros y calcula el IMC con la fórmula: peso / (altura en metros)^2.
    let bmi = peso / ((altura / 100)**2);

// Remueve la clase 'hidden' y muestra la tabla
    document.getElementById("tablaIMC").classList.remove("hidden");

    let resultado = document.getElementById('resultado');

// Muestra el resultado con 2 decimales
    resultado.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2);

    if (bmi < 18.5){
        resultado.innerHTML += ' - Bajo peso';
    } else if (bmi < 25) {
        resultado.innerHTML += ' - Peso normal';
    } else if (bmi < 30) {
        resultado.innerHTML += ' - Sobrepeso';
    } else {
        resultado.innerHTML += ' - Obesidad';
    }
}
