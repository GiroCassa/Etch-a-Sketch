const canvas = document.querySelector("#canvas");
let rows = 64;
let columns = 64;

createCanvas(rows, columns);

function createCanvas() {
    for (let i = 0; i < rows * columns; ++i) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        canvas.appendChild(pixel);
    }
}
