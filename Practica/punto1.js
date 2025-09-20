// programa inteligente que diga desde el numero mayor al numero menor de 4 numeros y diga si hay dos o tres numreros iguales

let numero1 = parseInt(prompt("Ingrese el numero 1: "))
let numero2 = parseInt(prompt("Ingrese el numero 2: "))
let numero3 = parseInt(prompt("Ingrese el numero 3: "))
let numero4 = parseInt(prompt("Ingrese el numero 4: "))

let lista = [numero1, numero2, numero3, numero4]

for(let i = 0; i < lista.length; i++){
    for(let j = 0; j < lista.length; j++){
        if(lista[i] < lista[j]){
            let aux = lista[i]
            lista[i] = lista[j]
            lista[j] = aux
        }
    }
}

console.log("Los números ordenados de mayor a menor: ")
console.log(lista)

// Verificar repeticiones
if (numero1 === numero2 && numero1 === numero3 && numero1 === numero4) {
    console.log("Todos los números son iguales");
} else if (
    (numero1 === numero2 && numero1 === numero3) ||
    (numero1 === numero2 && numero1 === numero4) ||
    (numero1 === numero3 && numero1 === numero4) ||
    (numero2 === numero3 && numero2 === numero4)
) {
    console.log("Hay tres números iguales");
} else if (
    numero1 === numero2 ||
    numero1 === numero3 ||
    numero1 === numero4 ||
    numero2 === numero3 ||
    numero2 === numero4 ||
    numero3 === numero4
) {
    console.log("Hay dos números iguales");
} else {
    console.log("No hay números iguales");
}