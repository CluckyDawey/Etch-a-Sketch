const Container = document.querySelector(".container")

const colBoxes = document.createElement("div")
colBoxes.setAttribute("class", "sContainer")

//create divs to be inserted into container
const box = document.createElement("div");
box.setAttribute("class", "items");

//function to append columns of boxes
function generateCanvas(n=16) {
    for(let i = 0; i < n; i++) {
        let clone = colBoxes.cloneNode(true);
        Container.appendChild(clone);
    }
}

//function to append rows of boxes
function appendRows(n=16) {
    for (let i = 0; i < n; i++) {
        colBoxes.append(box.cloneNode(true));
    }
}

//Function to create the whole canvas

generateCanvas()


//button function for requesting custom sized canvas
const reqButton = document.querySelector("button");

reqButton.addEventListener("click", function() {
    let canvasSize = prompt("Please enter desired number of boxes");

    if (isNaN(canvasSize) || canvasSize <= 0) {
        alert("The input submitted is not a valid number")
    } else if (canvasSize > 100) {
        alert("The maximum number that can be accepted is 100")
    } else {
        wholeCanvas(canvasSize)
    }
})

//main function for Etch a Sketch
const canvas = document.querySelectorAll(".items")

canvas.forEach((canva) => {
    canva.addEventListener("mouseout", function() {
        canva.style.backgroundColor = "black";
        console.log("Hovered!")
    })
})
