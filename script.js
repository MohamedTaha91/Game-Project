// Logic/modification for the Menu
const menu = document.getElementById("menu")
const body = document.querySelector("body")
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const exitButton = document.getElementById("exitButton");
    const menu = document.getElementById("menu");
    const board = document.getElementById("board");
    

    startButton.addEventListener("click", function() {
        // Hide the menu and show the game content
        menu.style.display = "none";
        board.style.display = "block";
    });

    exitButton.addEventListener("click", function() {
        document.body.innerHTML = "<h1>Thank you for playing!</h1>";
        //Thank you for playing!
    });
});

const player = new Player();
const game = new Game();

//assigning board elements to variables to be the size of the client.
const boardWidth = document.getElementById("board").clientWidth;
const boardHeight = document.getElementById("board").clientHeight;
const boardElement = document.getElementById("board");

let  playerPositionX = 0;
let playerPositionY = 0;

let playerDirectionY = "down"
let PlayerDirectionX = "right"

let playerSpeed = 10;

document.addEventListener("keydown", (event) => {
    event.preventDefault()
    if (event.key === "ArrowUp") {
        player.y -= player.speed;
        console.log("UP");
    } else if (event.key === "ArrowDown") {
        player.y += player.speed;
        console.log("Down");
    } else if (event.key === "ArrowLeft") {
        player.x -= player.speed;
        console.log("Left");
    } else if (event.key === "ArrowRight") {
        player.x += player.speed;
        console.log("Right");
    }
    player.element.style.top = `${player.y}px`;
    player.element.style.left = `${player.x}px`;
});

let animationId;

