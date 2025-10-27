const sContainer = document.querySelector(".container")
const container = document.createElement("div");
container.setAttribute("class", "container")

const box = document.createElement("div");
box.setAttribute("class", "cldContainer");

function appendNCopies(n, original, appendTo) {
    for(let i = 0; i < n; i++) {
        let clone = original.cloneNode(true);
        appendTo.appendChild(clone);
    }
}

for (let i = 0; i <= 15; i++) {
    sContainer.append(box.cloneNode(true));
}

appendNCopies(15, sContainer, document.body)