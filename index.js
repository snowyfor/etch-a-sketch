// Copyright Snowyfor
const container = document.querySelector(".container");
const resetBtn = document.querySelector("#reset");

createGrid(16);

resetBtn.addEventListener("click", function() {
    let input = prompt("Grid size: (max 100)");
    input = Number(input);
    if (input > 0) {
        removeGrid();
        createGrid(input);
    } else {
        alert("Please enter a valid number (number > 0)");
    }
});

function randomInteger(max) {
    // return a number between 0 and max inclusive
    return Math.floor(Math.random()*(max + 1));
}

function createGrid(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.style.width = `calc(496px / ${n})`;
            square.style.height = `calc(496px / ${n})`;
            square.classList.add("square");
            container.appendChild(square);
    
            square.addEventListener("mouseenter", function() {
                // random rgb generator
                let r = randomInteger(255);
                let g = randomInteger(255);
                let b = randomInteger(255);
                //random square color
                square.style.backgroundColor = `rgb(${r},${g},${b})`;
            });
        }
    }
}

function removeGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}