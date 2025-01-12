import { Physics } from "phaser";
import { SceneMain } from "./scenes/Game";

export default class Ground extends Physics.Arcade.Sprite{
    declare static scene: SceneMain;
    declare body: Physics.Arcade.Body;
    
    constructor(x: number, y: number,){
        super(Ground.scene, x, y, "groundSprite")
        
        Ground.scene.add.existing(this);
        Ground.scene.add.existing(this);  
        Ground.scene.physics.add.existing(this);
        this.setBounce(0);
        this.setInteractive();
        
    }
}