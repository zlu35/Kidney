class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload(){
        this.load.image('menuBG', './assets/menuBG.png');
        //loading font asset
        //this.load.bitmapFont('newFont', './assets/fonts/pixel.png', './assets/fonts/pixel.fnt');

 
    }
    
    create() {
        this.backround = this.add.tileSprite(0, 0, 320, 320, 'menuBG').setOrigin(0,0);

        //menu display
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '10px',
            backgroundColor: '#21F1FF',
            color: '#000000',
            align: 'right',
            padding: {
               top: 5,
               bottom: 5
           },
           fixedWidth: 0
         }

        this.cameras.main.setZoom(1);
        //adding menu text
        let textSpacer = 20;

        this.add.text(centerX, centerY - 2*textSpacer, "Use the (SPACEBAR) ", 10).setOrigin(0.5);
        this.add.text(centerX, centerY - textSpacer, "to begin the game",10).setOrigin(0.5);
        this.add.text(centerX, centerY + textSpacer, "Press (M) to see the instruction ", 10).setOrigin(0.5);


        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        //keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    update() {
         if (Phaser.Input.Keyboard.JustDown(keyM)) {
             this.scene.start('ruleScene');
         }

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('Scene0');
        }
    }
}