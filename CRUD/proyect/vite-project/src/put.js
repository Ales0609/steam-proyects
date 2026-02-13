const API_URL = 'https://698bced221a248a2735fca21.mockapi.io/estudiantes';

const buscador = document.querySelector('#buscador');
const resultados = document.querySelector('#resultados');

let estudiantesGlobal = []; // guardamos todos para filtrar



// CARGAR ESTUDIANTES DESDE LA API

async function cargarEstudiantes() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al cargar estudiantes");

    estudiantesGlobal = await res.json();
  } catch (error) {
    resultados.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}

// cargar al iniciar
cargarEstudiantes();



// BUSCADOR

buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();

  const filtrados = estudiantesGlobal.filter(est =>
    est.name.toLowerCase().includes(texto)
  );

  renderResultados(filtrados);
});



// MOSTRAR RESULTADOS EDITABLES

function renderResultados(lista) {
  if (lista.length === 0) {
    resultados.innerHTML = `<p>No se encontraron estudiantes.</p>`;
    return;
  }

  resultados.innerHTML = lista.map(est => `
    <div class="card">
      <input type="text" value="${est.name}" id="name-${est.id}" />
      <input type="text" value="${est.lastName}" id="last-${est.id}" />
      <input type="text" value="${est.Phone}" id="phone-${est.id}" />
      <input type="text" value="${est.gender}" id="gender-${est.id}" />

      <button onclick="actualizarEstudiante('${est.id}')">
        Actualizar
      </button>
    </div>
  `).join("");
}

// ACTUALIZAR ESTUDIANTE

window.actualizarEstudiante = async (id) => {
  const actualizado = {
    name: document.querySelector(`#name-${id}`).value.trim(),
    lastName: document.querySelector(`#last-${id}`).value.trim(),
    Phone: document.querySelector(`#phone-${id}`).value.trim(),
    gender: document.querySelector(`#gender-${id}`).value.trim()
  };

  // Validación básica
  if (!actualizado.name || !actualizado.lastName) {
    alert("Nombre y Apellido son obligatorios");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(actualizado)
    });

    if (!res.ok) throw new Error("No se pudo actualizar");

    // Recargar datos desde API
    await cargarEstudiantes();

    // Mantener el filtro actual
    buscador.dispatchEvent(new Event('input'));

    alert("Estudiante actualizado correctamente ✅");

  } catch (error) {
    console.error(error);
    alert("Error al actualizar");
  }
};