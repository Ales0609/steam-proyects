//Referencias a elementos del DOM

const input = document.querySelector('#num')
const btn = document.querySelector('#but')
const resultados = document.querySelector('.lista-resultados')

/* La razón por la que creamos las referencias como constantes es porque su contenido no va a variar.
querySelector permite seleccionar elementos por su id, clase o tipo */

/* Agregamos un evento de escucha para el botón 
¿Qué hace? 
detecta la notificación que envía el botón al hacerle click y después ejecuta una función flecha */

btn.addEventListener('click', () =>{
    /* () =>: función flecha. Funciona igual que las funciones con nombre propio,
        pero esta no tiene uno. Toma los argumentos, en caso de tener parámetros, y ejecuta unas instrucciones
        (a, b) => a + b*/
    resultados.innerHTML = ''
    const numero = input.value
    /* 'value: Se usa para accerder al contenido de un input,
        de No usarse se esteria seleccionando directamente a la etiqueta.'
        EJ: [object HTMLInputElement]*/


    /*  Con la palabra reservada "for" definimos el inicio del bucle y después, dentro de los parentesis, realizamos los parametros de configuración del bucle:
        1. inicialización de la variable
        2. condición
        3. actualización
    */

        /*  Nota: Una palabra reservada es un nombre que dentro del Lenguaje de programación 
            cumple una determinada función y por lo tanto no se puede isar para dar nombre a variables
        */
    for(let i = 0; i < 10; i++)
    {
        const elemento = document.createElement('p')

        elemento.innerText = `${numero} * ${i} = ${i * numero}`

        resultados.appendChild(elemento)
    }
    /* 'createElement': Crea un elemento HTML, pero no lo muestra puesto que no se le ha asignado una ubicación
        'innerHTML': Hace referencia a el contenido HTML de una etiqueta
        'appendChild': Añade una etiqueta dentro de otra */
})