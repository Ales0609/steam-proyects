function calcularAñoNuevo(){
    let añoNuevo = new Date(2026, 0, 1,)
    let hoy = new Date()
    const diferencia = añoNuevo - hoy;
    
    // Ajustar el año si año nuevo ya pasó
    if (hoy > añoNuevo && hoy.getTime() - añoNuevo.getTime() > 86400000) {
        añoNuevo.setFullYear(añoNuevo.getFullYear() + 1);
    }

        if (hoy >= añoNuevo) {
            if (!localStorage.getItem("recargaAñoNuevo")) {
                localStorage.setItem("recargaAñoNuevo", "ok");
                location.reload();
                return;
            }
        document.getElementById("titulo").innerHTML = `¡Feliz Año Nuevo ${añoNuevo.getFullYear()} 🎉!`;
        return;
    }

    const segundo = 1000
    const minuto = segundo * 60
    const hora = minuto * 60
    const dia = hora * 24

    const diasRestantes = Math.floor(diferencia / dia);
    const horasRestantes = Math.floor((diferencia % dia) / hora);
    const minutosRestantes = Math.floor((diferencia % hora) / minuto);
    const segundosRestantes = Math.floor((diferencia % minuto) /segundo);

    document.getElementById("dia").innerHTML = diasRestantes;
    document.getElementById("hora").innerHTML = horasRestantes;
    document.getElementById("minuto").innerHTML = minutosRestantes;
    document.getElementById("segundo").innerHTML = segundosRestantes;

}

calcularAñoNuevo()
setInterval(calcularAñoNuevo, 1000);