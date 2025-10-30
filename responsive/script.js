// Script para abrir/cerrar el menú
const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
});
