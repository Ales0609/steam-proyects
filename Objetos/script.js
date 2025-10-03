const boton = document.getElementById("boton");
const contenido = document.getElementById("contenido");
const atributosDiv = document.getElementById("atributos1");
let cargado = false;

boton.addEventListener("click", () => {
    if (contenido.style.display === "none" || contenido.style.display === "") {
        contenido.style.display = "block";
        boton.textContent = "Ocultar";

        if (!cargado) {
            Pc1();
            cargado = true;
        }

    } else {
        contenido.style.display = "none";
        boton.textContent = "Mostrar";
    }
});

function Pc1() {
    let computador = {
        procesador: 'Intel Core i7',
        ram: '16GB',
        video: 'RTX 3080',
        almacenamiento: '1TB',
        monitor: '24 pulgadas'
    };

    atributosDiv.innerHTML = "";

    for (let atributo in computador) {
        atributosDiv.innerHTML += `<p>${atributo}: ${computador[atributo]}</p>`;
    }
}