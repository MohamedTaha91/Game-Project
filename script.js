// Logic/modification for the Menu
const menu = document.getElementById("menu")
const body = document.querySelector("body")
const game = new Game();
let boardWidth;
let boardHeight;
let animationId;
let start = true
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const exitButton = document.getElementById("exitButton");
    const menu = document.getElementById("menu");
    const board = document.getElementById("board");


    startButton.addEventListener("click", function () {
        // Hide the menu and show the game content
        setInterval(() => {
            createDemon()
        }, 2000);
        menu.style.display = "none";
        board.style.display = "block";
        boardWidth = document.getElementById("board").clientWidth
        boardHeight = document.getElementById("board").clientHeight;
    });

    exitButton.addEventListener("click", function () {
        document.body.innerHTML = "<h1>Thank you for playing!</h1>";
        //Thank you for playing!
    });
});

const player = new Player();

const board = document.getElementById("board");
let score = 0;
function setDemonPosition() {
    game.demonArray.forEach((demon) => {
        demon.moveDemon();
        if (demon.x <= 0) {
            demon.element.remove()
            game.demonArray.shift()
            score += 10;
            document.getElementById("score").innerText = score;
        } if (demon.y >= boardHeight - demon.element.clientWidth) {
            demon.y = boardHeight - demon.element.clientWidth
        }
    })
}


setInterval(setDemonPosition, 1000 / 60);


const boardElement = document.getElementById("board");

function createDemon() {
    const createNewDemon = document.createElement("div")
    createNewDemon.classList.add("demon")
    const demon = new Demon(createNewDemon, boardElement);
    game.demonArray.push(demon)
    board.appendChild(createNewDemon);
}




let playerPositionX = 0;
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

    if (player.y <= 0) {
        player.y = 0;
    } if (player.x <= 0) {
        player.x = 0;

    } if (player.x >= boardWidth - player.element.clientWidth) {
        player.x = boardWidth - player.element.clientWidth
    } if (player.y >= boardHeight - player.element.clientWidth) {
        player.y = boardHeight - player.element.clientWidth
    }


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

function checkCollision() {
    for (let i = 0; i < game.demonArray.length; i++) {
        const demon = game.demonArray[i];

        if (
            player.x < demon.x + demon.element.clientWidth &&
            player.x + player.element.clientWidth > demon.x &&
            player.y < demon.y + demon.element.clientHeight &&
            player.y + player.element.clientHeight > demon.y
        ) {
            // Collision detected, remove the demon
            demon.element.remove();
            game.demonArray.splice(i, 1);
            player.health -= 1; // Decrease player's health
            updateHealthDisplay(); // Update the health display on the screen

            if (player.health <= 0) {
                // Game over condition: Player has no health left
                game.gameover = true;
                endGame();
            }
        }
    }
}

function updateHealthDisplay() {
    const healthElement = document.getElementById("health");
    healthElement.textContent = `Health: ${player.health}`;
}



setInterval(updatePlayerPosition, 1000 / 60);
// Call updatePlayerPosition in a loop to continuously update the player's position
// 60 FPS update rate
let frames = 0;
function animate() {
    if (!game.gameover) {
        setDemonPosition();
        checkCollision();
        frames++;

        // here is where the backlog will go

        animationId = requestAnimationFrame(animate);
    }
}

function endGame() {
    const gameBoard = document.getElementById("board");
    gameBoard.style.display = "none"; // Hide the game board

    // Display a game over message
    const gameOverMessage = document.createElement("div");
    gameOverMessage.textContent = "Game Over!";
    gameOverMessage.style.color = "red";
    gameOverMessage.style.fontSize = "36px";
    gameOverMessage.style.textAlign = "center";
    document.body.appendChild(gameOverMessage);
}


animate();


