
"use strict";

function board() {
    let  container = document.querySelector("#container");

    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplateRows = `repeat(16, 1fr)`;
    for(let i = 0; i < 16*16; i++) {
        //myGrid.push(createDiv());
        //container.appendChild(myGrid[i]);
        let square = document.createElement("div");

        square.style.backgroundColor = "cyan";
        square.style.border = "1px solid black";


        container.insertAdjacentElement("beforeend", square);
        square.addEventListener("mouseover",() => {
            square.style.background = "yellow";
        });



    }
}

        //gridStyle(gridDiv);















