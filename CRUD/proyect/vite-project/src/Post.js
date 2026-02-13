import { obtenerEstudiantes} from './main.js';
const formulario = document.querySelector('#form-estudiante');
const API_URL = 'https://698bced221a248a2735fca21.mockapi.io/estudiantes';

function post(){
    formulario.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nuevo = {
            name: document.querySelector('#name').value,
            lastName: document.querySelector('#lastName').value,
            Phone: document.querySelector('#Phone').value,
            gender: document.querySelector('#gender').value
        };
    
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevo)
        });
    
        formulario.reset();
        obtenerEstudiantes(); // Refresca la lista
    });
}
post()