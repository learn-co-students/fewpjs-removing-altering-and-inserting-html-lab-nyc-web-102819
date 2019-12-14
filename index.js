// Write your code here!
let main = document.getElementById("main")
main.remove()

let newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerText = "Triona is the Champion"

document.appendChild(newHeader)