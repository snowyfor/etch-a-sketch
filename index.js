// Copyright Snowyfor
const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetBtn");

createGrid(16);

// Create Grid
function createGrid(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.style.width = `calc(560px / ${n})`;
            square.style.height = `calc(560px / ${n})`;
            square.classList.add("square");
            container.appendChild(square);
    
            square.addEventListener("mouseenter", function() {
                // random rgb generator
                let r = randomInteger(255);
                let g = randomInteger(255);
                let b = randomInteger(255);
                // random square color
                square.style.backgroundColor = `rgb(${r},${g},${b})`;
            });
        }
    }
}

function randomInteger(max) {
    // return a number between 0 and max inclusive
    return Math.floor(Math.random()*(max + 1));
}

// Reset button (get user input & recreate the grid)
resetBtn.addEventListener("click", function() {
    let input = prompt("Grid size: (max 100)");
    input = Number(input);

    if (input >= 1 && input <= 100) {
        removeGrid();
        createGrid(input);
    } else {
        alert("Please enter a valid number (1-100)");
    }
});

function removeGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}