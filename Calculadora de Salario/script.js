function calcular(){
    const ganancias = parseFloat(document.getElementById("ganancias").value)
    const horas = parseFloat(document.getElementById("trabajadas").value)
    const semanas = parseInt(document.getElementById("semanas").value)

    if (isNaN(ganancias) || isNaN(horas) || isNaN(semanas) || ganancias <= 0 || horas <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }
    const salario = ganancias * horas * semanas
    alert(`Tu salario para ${semanas} semana(s) es: $${salario.toFixed(2)}`)
}