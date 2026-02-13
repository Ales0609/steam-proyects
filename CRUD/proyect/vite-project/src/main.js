const API_URL = 'https://698bced221a248a2735fca21.mockapi.io/estudiantes'
const contenedor = document.querySelector('#lista-estudiantes')

export async function obtenerEstudiantes() {
    try {
        const respuesta = await fetch(API_URL)
        if (!respuesta.ok) throw new Error('Error al cargar datos.');

        const estudiantes = await respuesta.json()
        renderEstudiantes(estudiantes)
    } catch (error) {
        contenedor.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

function renderEstudiantes(lista) {
    contenedor.innerHTML = lista.map(estudiantes => `
    <div class="card">
        <h3>${estudiantes.name} ${estudiantes.lastName}</h3>
        <p>Phone: ${estudiantes.Phone}</p>
        <p>Gender: ${estudiantes.gender}</p>
        <button onclick="eliminarEstudiante('${estudiantes.id}')">Eliminar</button>
    </div>
    `).join("");
}

    window.eliminarEstudiante = async (id) => {
        // Confirmación opcional para evitar borrados accidentales
        if (!confirm("¿Seguro que quieres eliminar este estudiante?")) return;
    
        try {
            const respuesta = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE' // Indicamos la acción de borrar
            });
    
            if (respuesta.ok) {
                console.log("Estudiante eliminado correctamente");
                // Refrescamos la lista para que desaparezca de la pantalla
                obtenerEstudiantes();
            } else {
                throw new Error("No se pudo eliminar el registro");
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    };

obtenerEstudiantes()