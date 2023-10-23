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

const arrowKeys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
};

document.addEventListener("keydown", (event) => {
    if (event.key in arrowKeys) {
        arrowKeys[event.key] = true;
        event.preventDefault()
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key in arrowKeys) {
        arrowKeys[event.key] = false;
    }
});

function updatePlayerPosition() {
    if (arrowKeys.ArrowUp && arrowKeys.ArrowRight) {
        // Move diagonally up-right
        player.y -= player.speed;
        player.x += player.speed;
    } else if (arrowKeys.ArrowUp && arrowKeys.ArrowLeft) {
        // Move diagonally up-left
        player.y -= player.speed;
        player.x -= player.speed;
    } else if (arrowKeys.ArrowDown && arrowKeys.ArrowRight) {
        // Move diagonally down-right
        player.y += player.speed;
        player.x += player.speed;
    } else if (arrowKeys.ArrowDown && arrowKeys.ArrowLeft) {
        // Move diagonally down-left
        player.y += player.speed;
        player.x -= player.speed;
    } else if (arrowKeys.ArrowUp) {
        // Move up
        player.y -= player.speed;
    } else if (arrowKeys.ArrowDown) {
        // Move down
        player.y += player.speed;
    } else if (arrowKeys.ArrowLeft) {
        // Move left
        player.x -= player.speed;
    } else if (arrowKeys.ArrowRight) {
        // Move right
        player.x += player.speed;
    }

    player.element.style.top = `${player.y}px`;
    player.element.style.left = `${player.x}px`;
    
}


setInterval(updatePlayerPosition, 1000 / 60); 
// Call updatePlayerPosition in a loop to continuously update the player's position
// 60 FPS update rate
let animationId;

