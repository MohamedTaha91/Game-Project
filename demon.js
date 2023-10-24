class Demon {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.velocity = 3;
        this.directionX = "right";
        this.directionY = "down";
        this.element = document.getElementById("demon");
    }

    moveDemon() {

        if (this.directionY === "down") {
            this.y += this.velocity;
            if (this.y >= container.clientHeight - this.element.clientHeight) {
                this.directionY = "up";
            }
        } else {
            this.y -= this.velocity;
            if (this.y <= 0) {
                this.directionY = "down";
            }
        }

        if (this.directionX === "right") {
            this.x += this.velocity;
            if (this.x >= container.clientWidth - this.element.clientWidth) {
                this.directionX = "left";
            }
        }
        else {
            this.x -= this.velocity;
        }


        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";

    }}