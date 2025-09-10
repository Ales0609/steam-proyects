    function comprar() {
        const precios = {
            arequipe: 900,
            vainilla: 800,
            chocolate: 1000,
            menta: 1200
        };

        const imagenes = {
            arequipe: 'arequipe.png',
            vainilla: "vanilla.png",
            chocolate: "chocolate.png",
            menta: "mint.png"
        };


        let sabor = document.getElementById("sabores").value;
        let cantidad = parseInt(document.getElementById("cantidad").value);


        if (!cantidad || cantidad <= 0) {
            alert("Por favor ingrese una cantidad válida");
            return;
        }
        let select = document.getElementById("sabores");

        if (select.value === "arequipe"){
            document.body.style.backgroundColor = 'rgba(227, 187, 112, 1)'    
        } else if (select.value === "vainilla"){
            document.body.style.backgroundColor = 'rgba(250, 242, 228, 1)'
        }   else if (select.value === "chocolate"){
            document.body.style.backgroundColor = 'rgba(97, 43, 4, 1)'
        } else if (select.value === "menta"){
            document.body.style.backgroundColor = 'rgb(155, 250, 176)'
        }

        let total = precios[sabor] * cantidad;

        document.getElementById("imagenHelado").src = imagenes[sabor];
        document.getElementById("imagenHelado").style.display = "block";


        let resultado = `
            <h2>${sabor.charAt(0).toUpperCase() + sabor.slice(1)}</h2>
            <p><strong>Cantidad:</strong> ${cantidad}</p>
            <p><strong>Total:</strong> ${total}</p>
        `;

        document.querySelector("h2").innerHTML = sabor.charAt(0).toUpperCase() + sabor.slice(1);
        document.querySelectorAll("label")[3].innerText = "Cantidad: " + cantidad;
        document.querySelectorAll("label")[2].innerText = "Total: " + total;
    }
