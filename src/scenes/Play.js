class Play extends Phaser.Scene {
    constructor() {
            super("playScene");
    }

    // init(), preload(), create(), update()

    preload() {
            //load images/ tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
    }

    create(){
        //place starfield
        this.starfield = this.add.tileSprite(0,0,game.config.width,game.config.height, 'starfield').setOrigin(0,0);

        //green rectangle UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0);
        //white borders
        this.add.rectangle(0,0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);//top
        this.add.rectangle(0,game.config.height-borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);//bottom
        this.add.rectangle(0,0,borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0); //left
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0); //right rectangle border

        //add rocket (Player 1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
    }

    update(){
        this.starfield.tilePositionX -= starSpeed;
    }
}