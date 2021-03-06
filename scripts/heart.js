class Heart extends Component {
    constructor(game){
        super(game);
        //things to change from the constructor
        //new bonus
        this.x = 850;
        this.y = Math.floor(Math.random() * 300 + 30)
        this.width = 10;
        this.height = 10;
        this.img = new Image();
    }
    draw(){
        //access image
        this.img.src = "images/heart.png";
        //draw bonus
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }
    //move bonus
    move(){
        //randomized movement
        if(Math.floor(Math.random() * 20) % 3 === 0){
            this.x -= 10;
        }
    }

    collect(){
        this.x += 200;
        this.y += 2000;
    }

}