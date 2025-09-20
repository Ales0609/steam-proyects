function GenerarTabla(){
    let numero = document.getElementById('numero').value;
    document.getElementById('operacion1').textContent = `${numero} x 1`
    document.getElementById('operacion2').textContent = `${numero} x 2`
    document.getElementById('operacion3').textContent = `${numero} x 3`
    document.getElementById('operacion4').textContent = `${numero} x 4`
    document.getElementById('operacion5').textContent = `${numero} x 5`
    document.getElementById('operacion6').textContent = `${numero} x 6`
    document.getElementById('operacion7').textContent = `${numero} x 7`
    document.getElementById('operacion8').textContent = `${numero} x 8`
    document.getElementById('operacion9').textContent = `${numero} x 9`
    document.getElementById('operacion10').textContent = `${numero} x 10`

    document.getElementById('resultado1').textContent = numero*1;
    document.getElementById('resultado2').textContent = numero*2;
    document.getElementById('resultado3').textContent = numero*3;
    document.getElementById('resultado4').textContent = numero*4;
    document.getElementById('resultado5').textContent = numero*5;
    document.getElementById('resultado6').textContent = numero*6;
    document.getElementById('resultado7').textContent = numero*7;
    document.getElementById('resultado8').textContent = numero*8;
    document.getElementById('resultado9').textContent = numero*9;
    document.getElementById('resultado10').textContent = numero*10;
}