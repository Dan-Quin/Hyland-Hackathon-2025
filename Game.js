import { Scene } from 'phaser';
import Player from '../Player';
import Ground from '../ground';
import { Collision } from 'phaser';
 

let keyA;
let keyD;
let keyLeft;
let keyRight;
let player1;
let player2;
let keyW;
let keyUp;
export class SceneMain extends Scene
{
    constructor ()
    {
        super('SceneMain');
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.image('background', 'bg.png');
        this.load.image('logo', 'logo.png');
        this.load.image('groundSprite', 'ground.png')
    }

    create ()
    {
        Player.scene = this;
        Ground.scene = this;
        let groundGroup = this.physics.add.staticGroup();
        this.add.image(500, 350, 'background');
        player1 = new Player(512, 500);
        player2 = new Player(100, 500);
        groundGroup.create(500, 750, 'groundSprite');
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.physics.add.collider(player2, groundGroup);
        this.physics.add.collider(player1, groundGroup);
        this.physics.add.collider(player1, player2);
        let healthBar = this.makeBar(140,200,'green');
        this.add.rectangle(140, 200, 'green');
        this.setValue(healthBar, 100);
    }

    makeBar(x,y,color){
        let bar = this.add.graphics();
        bar.fillStyle(1,color);
        bar.fillRect(0,0,200,50);
        bar.x = x;
        bar.y = y;
        return bar;
    }
    setValue(bar,percentage){
        bar.scaleX = percentage/100;
    }
    update(){
        
        if(keyA.isDown){
            player1.x = player1.x -1;
        }
        if(keyD.isDown){
            player1.x = player1.x +1;
        }
        if(keyLeft.isDown){
            player2.x = player2.x -1;
        }
        if(keyRight.isDown){
            player2.x = player2.x +1;
        }
        if(keyW.isDown && player1.body.touching.down){
            player1.setVelocityY(-100);
        }
        if(keyUp.isDown && player2.body.touching.down){
            player2.setVelocityY(-100);
        }
    }
}
