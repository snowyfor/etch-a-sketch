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

function createGrid(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.style.width = `calc(400px / ${n})`;
            square.style.height = `calc(400px / ${n})`;
            square.classList.add("square");
            container.appendChild(square);
    
            square.addEventListener("mousemove", function() {
                square.style.backgroundColor = "aquamarine";
            });
        }
    }
}

function removeGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.remove());
}