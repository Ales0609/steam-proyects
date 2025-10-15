const products = [
    { id: 1, nombre: 'Pizza', precio: 2000 },
    { id: 2, nombre: 'Empanada', precio: 4000 },
    { id: 3, nombre: 'Coca-Cola', precio: 4000 }
];

let carrito = [];

// Agregar producto al carrito
function AgregarAlCarrito(productosId) {
    const producto = products.find(p => p.id === productosId);

    if (producto) {
        const itemEnCarrito = carrito.find(item => item.id === productosId);

        if (itemEnCarrito) {
            itemEnCarrito.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        MostrarCarrito();
    }
}

// Mostrar los productos agrupados
function MostrarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');
    carritoItems.innerHTML = '';

    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `(${item.cantidad}) ${item.nombre} - $${item.precio * item.cantidad}`;

        const btnEliminar = document.createElement('button');
        btnEliminar.innerHTML = '<img src="trash.png" alt="X">';
        btnEliminar.onclick = () => EliminarDelCarrito(index);

        li.appendChild(btnEliminar);
        carritoItems.appendChild(li);

        total += item.precio * item.cantidad;
    });

    carritoTotal.textContent = `Total: $${total}`;
}

// Eliminar producto completo del carrito
function EliminarDelCarrito(indice) {
    if (carrito[indice].cantidad > 1) {
        carrito[indice].cantidad--;
    } else {
        carrito.splice(indice, 1);
    }
    MostrarCarrito();
}

// Acción del botón comprar
document.getElementById('comprar').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
    } else {
        alert('Compra realizada con éxito');
        carrito = [];
        MostrarCarrito();
    }
});
