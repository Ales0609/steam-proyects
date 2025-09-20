// Metodo de ordamiento Selección

// De menor a mayor

let numero1 = 5
let numero2 = 3
let numero3 = 1
let numero4 = 4
let lista = [numero1, numero2, numero3, numero4]

for(i = 0; i < lista.length; i++){
    let min = i
    for(j = i + 1; j < lista.length; j++){
        if(lista[j] < lista[min]){
            min = j
        }
    }
    // Solo se intercambia si encontro un número más pequeño
    if(min !== i){
        [lista[i], lista[min]] = [lista[min], lista[i]]
    }
}
console.log(lista)

// De mayor a menor 

for(i = 0; i < lista.length; i++){
    let max = i
    for(j = i + 1; j < lista.length; j++){
        if(lista[j] > lista[max]){
            max = j
        }
    }
    // Solo se intercambia si encontro un número más pequeño
    if(max !== i){
        [lista[i], lista[max]] = [lista[max], lista[i]]
    }
}
console.log(lista)