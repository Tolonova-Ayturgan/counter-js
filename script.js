
const plus = document.getElementById("plus")
const count = document.getElementById("zero")
const minus = document.getElementById("minus")

let counter = 0

function plusFunction(){
    counter++
    count.innerHTML = counter
}


function minusFunction(){
    counter--
    count.innerHTML = counter
}


plus.addEventListener("click", plusFunction)
minus.addEventListener("click", minusFunction)









