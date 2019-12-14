// Write your code here!
let main = document.getElementById("main")
main.remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = 'Triona is the champion'
newHeader.className = "victory"
document.body.appendChild(newHeader)