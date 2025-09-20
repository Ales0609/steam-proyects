// Metodo de ordamiento de burbuja

// De menor a mayor

let numero1 = 5
let numero2 = 3
let numero3 = 1
let numero4 = 4
let lista = [numero1, numero2, numero3, numero4]

for(i = 0; i < lista.length; i++){
    for(j = 0; j < lista.length; j++){
        if(lista[i] < lista[j]){
            let aux = lista[i]
            lista[i] = lista[j]
            lista[j] = aux
        }
    }
}
console.log(lista)

// De mayor a menor 

for(i = 0; i < lista.length; i++){
    for(j = 0; j < lista.length; j++){
        if(lista[i] > lista[j]){
            let aux = lista[i]
            lista[i] = lista[j]
            lista[j] = aux
        }
    }
}

console.log(lista)