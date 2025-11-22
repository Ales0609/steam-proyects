const notasTextarea = document.getElementById("notas");
const saveButton = document.getElementById("save");
const clearButton = document.getElementById("clear");

// Cargar notas guardadas al iniciar
notasTextarea.value = localStorage.getItem("notas") || "";

// Guardar notas al hacer clic en el botón "Guardar"
saveButton.addEventListener("click", () => {
    localStorage.setItem("notas", notasTextarea.value);
    alert("Notas guardadas!");
});

// Vaciar notas al hacer clic en el botón "Vaciar"
clearButton.addEventListener("click", () => {
    notasTextarea.value = "";
    localStorage.removeItem("notas");
    alert("Notas vaciadas!");
});

// Al darle click al boton de guardar o al borrar cambia de color el borde del textarea
saveButton.addEventListener("click", () => {
    notasTextarea.style.borderColor = "blue";
    notasTextarea.style.boxShadow = "0 0 10px rgba(0, 0, 255, 0.5)";
    setTimeout(() => {
        notasTextarea.style.borderColor = "";
        notasTextarea.style.boxShadow = "";
    }, 1300);
    notasTextarea.style.transition = "all 0.3s ease";
});

clearButton.addEventListener("click", () => {
    notasTextarea.style.borderColor = "red";
    notasTextarea.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
    setTimeout(() => {
        notasTextarea.style.borderColor = "";
        notasTextarea.style.boxShadow = "";
    }, 1300);
    notasTextarea.style.transition = "all 0.3s ease";
});