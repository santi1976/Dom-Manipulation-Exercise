let input1 = document.getElementsByTagName("input")[0]
let input2 = document.getElementsByTagName("input")[1]
let h3 = document.querySelector("h3")
let body = document.getElementById("gradient")


function chooseColor() {
    body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")"
    
    h3.textContent = body.style.background
}

input1.addEventListener("input", chooseColor)
input2.addEventListener("input", chooseColor)
