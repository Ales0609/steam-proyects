const fecha1Input = document.getElementById("date1");
const fecha2Input = document.getElementById("date2");
const resultadoP = document.getElementById("resultado");

function res() {
    const diferenciaMS = Math.abs(new Date(fecha2Input.value).getTime() - new Date(fecha1Input.value).getTime());
    
    if (isNaN(diferenciaMS)) {
        resultadoP.textContent = "Pon fecha erda.";
        return;
    }
    
    const resultado = {
        dias: Math.floor(diferenciaMS / (1000 * 60 * 60 * 24)),
        horas: Math.floor(diferenciaMS / (1000 * 60 * 60) % 24),
        minutos: Math.floor(diferenciaMS / (1000 * 60) % 60),
    };

    resultadoP.textContent = `Tiempo transcurrido: ${resultado.dias} días, ${resultado.horas} horas, ${resultado.minutos} minutos`;
}