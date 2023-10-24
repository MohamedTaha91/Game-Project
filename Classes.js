


class Game{
    constructor(score, gameover){
        this.score= score;
        this.gameover=false;
        this.demonArray = [];
    }
}

class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 10; 
        this.element = document.getElementById("player");
        
    }
}

class Demon {
    constructor(element) {
        this.x = 390;
        this.y = 10;
        this.velocity = 3;
        this.directionX = "left";
        this.directionY = "down";
        this.element = element;
    }

    moveDemon() {

      /*   if (this.directionY === "down") {
            this.y += this.velocity;
            if (this.y >= board.clientHeight - this.element.clientHeight) {
                this.directionY = "up";
            }
        } else {
            this.y -= this.velocity;
            if (this.y <= 0) {
                this.directionY = "down";
            }
        }  */

    /*     if (this.directionX === "right") {
            this.x += this.velocity;
            if (this.x >= board.clientWidth - this.element.clientWidth) {
                this.directionX = "left";
            }
        }
        else {
            console.log("I think we are here"); */
            this.x -= this.velocity;
      /*   } */


        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";

    }}
    // setInterval(setDemonPosition, 1000 / 60); 