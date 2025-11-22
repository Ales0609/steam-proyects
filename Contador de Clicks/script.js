let contador  = Number(localStorage.getItem("contador")) || 0;

document.getElementById("spanCount").textContent = contador;

document.getElementById("clickButton").addEventListener("click", () => {
    contador++; // sumar 1
    document.getElementById("spanCount").textContent = contador;
    localStorage.setItem("contador", contador);
});

document.getElementById("reset").addEventListener("click", () => {
    localStorage.removeItem("contador");
    contador = 0;
    document.getElementById("spanCount").textContent = contador;
});

