let productos = [];

//agregar los productos
function agregarProducto() {
    let nombre = document.getElementById("nombre").value.trim();
    let precio = parseFloat(document.getElementById("precio").value);
    let stock = parseInt(document.getElementById("stock").value);

    if (!nombre || isNaN(precio) || isNaN(stock)) {
        alert("Por favor completa todos los campos correctamente");
        return;
    }

    productos.push({ nombre, precio, stock });
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("stock").value = "";
    alert("Producto agregado con éxito");
}

//mostrar la lista de todos los productos
function mostrarLista() {
    let texto = "Lista completa de productos:\n";
    for (let p of productos) {
        texto += `${p.nombre} - $${p.precio} - Stock: ${p.stock}\n`;
    }
    document.getElementById("resultado").textContent = texto;
}

//filtrar los productos disponibles en stock
function mostrarDisponibles() {
    let disponibles = productos.filter(p => p.stock > 0);
    let texto = "Productos disponibles:\n";
    for (let p of disponibles) {
        texto += `${p.nombre} - $${p.precio} - Stock: ${p.stock}\n`;
    }
    document.getElementById("resultado").textContent = texto;
}

//calcular el valot total de los productos en stock
function calcularValor() {
    let total = productos.reduce((sum, p) => sum + (p.precio * p.stock), 0);
    document.getElementById("resultado").textContent = `Valor total del inventario: $${total}`;
}