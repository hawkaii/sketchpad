
"use strict";

let container = document.querySelector("#container");
const gridLine = document.querySelector(".gridLine");
//let color = document.querySelector(".color");
let color = "white";

//let square;

board(32);





function board(size) {

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        //myGrid.push(createDiv());
        //container.appendChild(myGrid[i]);
        let square = document.createElement("div");


        square.style.backgroundColor = "cyan";

        gridLine.addEventListener("click", () => {
            if (gridLine.value === "ON")
                square.style.border = "";

            else {
                square.style.border = "1px solid black";
            }

        });

        square.addEventListener("mouseover",squareColor);






        container.insertAdjacentElement("beforeend", square);
        /*function (color){

        }*/


    }
}
function changeSize(size){
    if(size > 0 && size <= 100){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        board(size);
    }
    else {
      alert("Please choose a proper number")
    }

}

function squareColor(){
    this.style.backgroundColor = color;
}
function changeColor(option){
    if(option === "OFF"){

    }else{
        color = option;
    }
}
function changeValue(){
    if(gridLine.value === "ON"){
        gridLine.value = "OFF";
    }else{
        gridLine.value = "ON"
    }

}





        //gridStyle(gridDiv);















