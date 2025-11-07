function calcularDiasParaNavidad() {
    let navidad = new Date(2025, 11, 25, 0, 0, 0);
    let hoy = new Date();

    // Ajustar el año si navidad ya pasó
    if (hoy > navidad && hoy.getTime() - navidad.getTime() > 86400000) {
        navidad.setFullYear(navidad.getFullYear() + 1);
    }
    
    if (hoy >= navidad) {
        if (!localStorage.getItem("recargaNavidad")) {
            localStorage.setItem("recargaNavidad", "ok");
            location.reload();
            return;
        }

        document.getElementById("titulo").innerHTML = `¡Feliz Navidad ${navidad.getFullYear()}🎉!`;
        document.getElementById("resultado").innerHTML = `¡Que la pases increíble junto a tus seres queridos! 🎄✨`;
        return;
    }

    const diferencia = navidad - hoy;
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    document.getElementById("titulo").innerHTML = `Cuantos dias faltan para Navidad ${navidad.getFullYear()}?`;
    document.getElementById("resultado").innerHTML = diasRestantes;
}
calcularDiasParaNavidad();
setInterval(calcularDiasParaNavidad, 1000);