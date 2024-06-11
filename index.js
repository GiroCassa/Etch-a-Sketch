const canvas = document.querySelector(".canvas");
const navBar = document.querySelector(".navBar");
const btn8 = document.createElement("button");
const btn16 = document.createElement("button");
const btn32 = document.createElement("button");
const btn64 = document.createElement("button");
const btn128 = document.createElement("button");
btn8.className = "btn";
btn16.className = "btn";
btn32.className = "btn";
btn64.className = "btn";
btn128.className = "btn";
btn8.id = "btn8";
btn16.id = "btn16";
btn32.id = "btn32";
btn64.id = "btn64";
btn128.id = "btn128";
navBar.appendChild(btn8);
navBar.appendChild(btn16);
navBar.appendChild(btn32);
navBar.appendChild(btn64);
navBar.appendChild(btn128);
btn8.textContent = "8bit";
btn16.textContent = "16bit";
btn32.textContent = "32bit";
btn64.textContent = "64bit";
btn128.textContent = "128bit";


let startRows = 16;
let startColumns = 16;
let isMouseDown = false;

createCanvas(startRows, startColumns);









btn8.addEventListener("click", function() {
    clearCanvas(startRows, startColumns);
    startRows = 8;
    startColumns = 8;
    createCanvas(startRows, startColumns);
})

btn16.addEventListener("click", function() {
    clearCanvas(startRows, startColumns);
    startRows = 16;
    startColumns = 16;
    createCanvas(startRows, startColumns);
})

btn32.addEventListener("click", function() {
    clearCanvas(startRows, startColumns);
    startRows = 32;
    startColumns = 32;
    createCanvas(startRows, startColumns);
})

btn64.addEventListener("click", function() {
    clearCanvas(startRows, startColumns);
    startRows = 64;
    startColumns = 64;
    createCanvas(startRows, startColumns);
})

btn128.addEventListener("click", function() {
    clearCanvas(startRows, startColumns);
    startRows = 128;
    startColumns = 128;
    createCanvas(startRows, startColumns);
})

function createCanvas(rows, columns) {
    for (let i = 0; i < rows * columns; ++i) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        let pixelHeight = 640 / rows;
        let pixelWidth = 640 / columns;
        pixel.style.height = `${pixelHeight}px`;
        pixel.style.width = `${pixelWidth}px`;
        pixel.addEventListener("mousedown", (e) => {
            isMouseDown = true;
            e.preventDefault();
            pixel.style.backgroundColor = "black";
        })
        pixel.addEventListener("mouseover", (e) => {
            if (isMouseDown == true) {
                e.preventDefault();
                pixel.style.backgroundColor = "black";
            }
        })
        canvas.appendChild(pixel);
    }
}

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});



function clearCanvas(rows, columns) {
    for (let i = 0; i < rows * columns; ++i) {
    canvas.removeChild(canvas.firstElementChild)
    }
}