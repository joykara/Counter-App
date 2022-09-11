let countElement = document.getElementById("count-el")  //DOM
let saveElement = document.getElementById("save-el")

console.log(saveElement)

let count = 0

//describe button function: give command
function increment() {
    count += 1   //increment count
    countElement.textContent = count
}

function decrement() {
    count = count - 1   //decrement count
    countElement.textContent = count
}

function save() {
    let countSave = count + " - "
    saveElement.textContent += countSave
    countElement.textContent = 0
    count = 0
}







