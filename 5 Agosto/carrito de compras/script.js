//agregar productos al carrito enlazado al index.html
let carrito = [];
let productos = document.getElementById("productos");

function agregarProductos(producto) {
    if (producto && producto.value) {
        let productoSeleccionado = producto.value;
        carrito.push(productoSeleccionado);
        console.log("Producto agregado:", productoSeleccionado);
        console.log("Carrito actual:", carrito);
    }
}

// Event listener para el elemento productos
if (productos) {
    productos.addEventListener("change", function() {
        agregarProductos(this);
    });
} else {
    console.error("Error: Elemento 'productos' no encontrado");
}
