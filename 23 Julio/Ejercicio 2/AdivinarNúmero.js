    let comp = Math.floor(Math.random() * 40)
    let resultado = document.getElementById('resultado');
    let intentos = 1
    let historial = document.getElementById('Historial')

    function adivinar(){
        let usuario = parseInt(document.getElementById('numero').value);

        if (usuario > comp){
            alert(`Tu numero es mayor ${comp}, intentos ${intentos}`);
            intentos = intentos + 1
        } else if (usuario < comp){
            alert(`Tu numero es menor ${comp}, intentos ${intentos}`);
            intentos = intentos + 1
        } else if (usuario === comp){
            alert(`Adivinaste! ${comp}, intentos ${intentos}`);
            comp = Math.floor(Math.random() * 40)
            intentos = 1
            historialElement.innerHTML = '';
        }
        let p = document.createElement('p')
        p.textContent = `Tu numero anterior fue ${usuario}`
        historial.appendChild(p)
    }
