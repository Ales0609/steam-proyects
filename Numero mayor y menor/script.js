let input1 = document.getElementById("num1")
let input2 = document.getElementById("num2")

function mayorYmenor() {
    num1 = parseInt(input1.value)
    num2 = parseInt(input2.value)

    if(num1 > num2) {
        input1.style.backgroundColor = "rgb(73, 247, 73)"
        input1.style.transform = "translate(0px, -20px)"
        input2.style.backgroundColor = ""
        input2.style.transform = "translate(0px, 0px)"
    } else if(num2 > num1) {
        input2.style.backgroundColor = "rgb(73, 247, 73)"
        input2.style.transform = "translate(0px, -20px)"
        input1.style.backgroundColor = ""
        input1.style.transform = "translate(0px, 0px)"
    } else if (num1 === 0 && num2 === 0) {
        input1.style.backgroundColor = ""
        input1.style.transform = "translate(0px, 0px)"
        input2.style.backgroundColor = ""
        input2.style.transform = "translate(0px, 0px)"
    } else if(num1 === num2){
        input1.style.backgroundColor = "rgb(73, 247, 73)"
        input1.style.transform = "translate(0px, -20px)"
        input2.style.backgroundColor = "rgb(73, 247, 73)"
        input2.style.transform = "translate(0px, -20px)"
    }
}
input1.addEventListener("input", mayorYmenor)
input2.addEventListener("input", mayorYmenor)