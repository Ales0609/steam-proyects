function cambiarFondo(){
    document.body.style.backgroundColor = generarColor();
    document.querySelector('h1').innerText = document.body.style.backgroundColor;
}

function generarColor(){
    let colorRed = Math.random() * 255;
    let colorGreen = Math.random() * 255;
    let colorBlue = Math.random() * 255;
    return "rgb("+colorRed+","+colorGreen+","+colorBlue+")";
}