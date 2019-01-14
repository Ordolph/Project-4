// User Input Variables
// let columns = 5;
// let rows = 5;

// const tile = {
//     x: 30,
//     y: 30
// };

// const canvas = {
//     height: 605,
//     width: 605
// };

// const grid = {
//     columnsAmount: columns,
//     rowsAmount: rows
// };

// function draw() {
//     background(51);

//     for(let i = 0; i < grid.columnsAmount; i++) {
//         for(let n = 0; n < grid.rowsAmount; n++) {
//             let tileWidth = (canvas.width - 5) / grid.columnsAmount;
//             let tileHeight = (canvas.height - 5) / grid.rowsAmount;
//             tile.x = i * tileWidth + 2;
//             tile.y = n * tileHeight + 2;

            
//             stroke(0);
//             fill(255);
//             rect(tile.x, tile.y, tileWidth, tileHeight);
//             fill(0,0,255);
//             text("1", tile.x + 60, tile.y + 60);
            
//         }
//     }
// }

// function clicked() {
//     for(let i = 0; i < grid.columnsAmount; i++) {
//         for(let n = 0; n < grid.rowsAmount; n++) {
//             if (mouseX > ) {

//             }
//         }
//     }
// }
// Refactor of grid
let board = [];

class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        rect(this.x, this.y, 60, 60);
    }
    clicked() {
        if (mouseX > this.x && mouseX < this.x + 60 && mouseY > this.y && mouseY < this.y + 60) {
            console.log(`You clicked square (x: ${this.x} y: ${this.y})`);
        }
    }
}

function setup() {
    createCanvas(605, 605);
    for(var i = 0; i < 10; i++) {
        for(var n = 0; n < 10; n++) {
            let x = i * 60 + 2;
            let y = n * 60 + 2;
    
            let rectangle = new Tile(x, y);
            board.push(rectangle);
        }
    }
}

function draw() {
    for(let i = 0; i < board.length; i++) {
        board[i].show();
    }
}

function mousePressed() {
    for(let i = 0; i < board.length; i++) {
        board[i].clicked();
    }  
}


// $(function() {

//     $("#column-select").on("change", function() {
//         grid.columnsAmount = $("#column-select").val();
//     // draw();
//     });

//     $("#row-select").on("change", function() {
//         grid.rowsAmount = $("#row-select").val();
//     // draw();
//     });
// });