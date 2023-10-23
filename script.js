// Logic/modification for the Menu
const menu = document.getElementById("menu")
const body = document.querySelector("body")
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const exitButton = document.getElementById("exitButton");
    const menu = document.getElementById("menu");
    const game = document.getElementById("game");

    startButton.addEventListener("click", function() {
        // Hide the menu and show the game content
        menu.style.display = "none";
        game.style.display = "block";
    });

    exitButton.addEventListener("click", function() {
        document.body.innerHTML = "<h1>Thank you for playing!</h1>";
    });
});



