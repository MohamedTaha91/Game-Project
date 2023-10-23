


class Game{
    constructor(score, gameover){
        this.score= score;
        this.gameover= false;
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
