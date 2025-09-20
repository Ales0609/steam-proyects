let numeros = [];

function agregarNumero() {
    const input = document.getElementById("numero");
    const valor = parseInt(input.value);

    if (!isNaN(valor)) {
        numeros.push(valor);

        const lista = document.getElementById("listaNumeros");
        lista.innerHTML = "";
        numeros.forEach(n => {
            lista.innerHTML += `<span class="numero">${n}</span>`;
        });

        const mayor = Math.max(...numeros);
        document.getElementById("resultado").innerText = "El número mayor es: " + mayor;
    }
    input.value = "";
    input.focus();
}


function EliminarNumero(){
    location.reload();
}
