const Container = document.querySelector(".container")

//create item boxes
function createItems() {
    const box = document.createElement("div");
    box.classList.add("items")
    box.addEventListener("mouseenter", ()=>{
        box.style.backgroundColor = "black";
    })
    return box
}

//create rows of divs to be inserted into container
function createRows(n=16) {
    const rowBoxes = document.createElement("div")
    for (let i = 0; i < n; i++) {
        let item = createItems();
        rowBoxes.append(item);
    }
    rowBoxes.classList.add("sContainer")

    return rowBoxes
}


//function to append columns of boxes
function generateCanvas(n=16) {
    for(let i = 0; i < n; i++) {
        let clone = createRows(n);
        Container.appendChild(clone);
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
        Container.replaceChildren()
        generateCanvas(canvasSize)
    }
})

