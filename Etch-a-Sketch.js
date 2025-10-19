const container = document.querySelector("#container");

const box = document.createElement("div");

for (let i = 0; i <= 15; i++) {
    container.append(box.cloneNode(true));
}