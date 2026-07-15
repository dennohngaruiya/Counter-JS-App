//document.getElementById("count-el").innerText = 5

//let count = 0

// console.log(count)

//initialize the count as 0

let count = 0
let countEl = document.getElementById("count-el")

//listen for clicks on the increment button
//increment the count variable when the button is clicked 
//change the count-el in the HTML to reflect the new count

function increment(){

    count += 1

    countEl.innerText = count
}

let saveEl = document.getElementById("save-el")

// Create a function save() that prints the count to the saveEl paragraph.
function save(){

    let dashCount = count + " - "

    saveEl.textContent += dashCount

    countEl.textContent = 0
    count = 0

    //console.log(count)

}




