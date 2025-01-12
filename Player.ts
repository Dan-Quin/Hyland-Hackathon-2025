import { Physics } from "phaser";
import { SceneMain } from "./scenes/Game";

export default class Player extends Physics.Arcade.Sprite{
    declare static scene: SceneMain;
    declare body: Physics.Arcade.Body;
    
    constructor(x: number, y: number){
        super(Player.scene, x, y, "playerSprite")

        Player.scene.add.existing(this);
        Player.scene.add.existing(this);  
        Player.scene.physics.add.existing(this);
        this.body.setGravityY(100);
        this.setInteractive();
        
    }
}