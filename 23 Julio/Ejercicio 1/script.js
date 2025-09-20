
let piedra = 0
let papel = 1
let tijera = 2

let usuario1 = Math.floor(Math.random() * 3)
let usuario2 = Math.floor(Math.random() * 3)

if (usuario1 == piedra && usuario2 == papel) {
    console.log(`Jugador 1 Piedra, Jugador 2 Papel`)
    console.log("Usuario 2 gana")
} else if (usuario1 == piedra && usuario2 == tijera){
    console.log(`Jugador 1 Piedra, Jugador 2 Tijera`)
    console.log("Usuario 1 gana")
} else if (usuario1 == papel && usuario2 == piedra){
    console.log(`Jugador 1 Papel, Jugador 2 Piedra`)
    console.log("Usuario 1 gana")
} else if (usuario1 == papel && usuario2 == tijera){
    console.log(`Jugador 1 Papel, Jugador 2 Tijera`)
    console.log("Usuario 2 gana")
} else if (usuario1 == tijera && usuario2 == papel){
    console.log(`Jugador 1 Tijera, Jugador 2 Papel`)
    console.log("Usuario 1 gana")
} else if (usuario1 == tijera && usuario2 == piedra){
    console.log(`Jugador 1 Tijera, Jugador 2 Piedra`)
    console.log("Empate")
} else if (usuario1 == papel && usuario2 == papel){
    console.log(`Jugador 1 Papel, Jugador 2 Papel`)
    console.log("Empate")
} else if (usuario1 == tijera && usuario2 == tijera){
    console.log(`Jugador 1 Tijera, Jugador 2 Tijera`)
    console.log("Empate")
}else if (usuario1 == piedra && usuario2 == piedra){
    console.log(`Jugador 1 Piedra, Jugador 2 Piedra`)
    console.log("Empate")
}