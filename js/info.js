/* Info.js */

var infoState = {
	robot: "",
	cloud1: "",
	cloud2: "",
	cloud3: "",
	cloud4: "",
	cloud5: "",
	direction: 1,

	preload: function(){
		game.load.image('info-cloud', 'assets/cloud.png');
		game.load.image('info-ground', 'assets/ground.png');
		game.load.spritesheet('info-robot-sprite', 'assets/robot_sprite/robot_sprite.png', 365, 492, 3);
	},

	create: function(){
		game.stage.backgroundColor = "#b4a39c";
		var ground  = game.add.sprite(0, game.world.centerY, 'info-ground');
		ground.anchor.setTo(1, 1);
		this.robot = game.add.sprite(game.world.centerX, height, 'info-robot-sprite');
		var anim = this.robot.animations.add('anim');
		this.robot.animations.play('anim', 1, true);
		this.robot.anchor.setTo(1,1);
		this.cloud1 = game.add.sprite(50, -18, 'info-cloud');
		this.cloud2 = game.add.sprite(game.world.centerX * 1/2 - 50, -30, 'info-cloud');
		this.cloud3 = game.add.sprite(game.world.centerX, -20, 'info-cloud');
		this.cloud4 = game.add.sprite(game.world.centerX * 5/4, -30, 'info-cloud');
		this.cloud5 = game.add.sprite(width - 50, -25, 'info-cloud');
		this.cloud3.anchor.setTo(0.5, 0);
		this.cloud1.scale.setTo(0.62, 0.62);
		this.cloud2.scale.setTo(0.4, 0.4);
		this.cloud3.scale.setTo(0.7, 0.7);
		this.cloud4.scale.setTo(0.49, 0.49);
		this.cloud5.scale.setTo(0.67, 0.67);
		this.cloud5.anchor.setTo(1,0);

		var inputKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		inputKey.onDown.addOnce(this.start, this);
	},

	update: function(){

		this.cloud1.y += 0.3 * this.direction;
		this.cloud2.y -= 0.3 * this.direction;
		this.cloud3.y += 0.3 * this.direction;
		this.cloud4.y -= 0.3 * this.direction;
		this.cloud5.y += 0.3 * this.direction;

		if(this.cloud1.y < -40){
			this.direction = 1;
		}

		else if (this.cloud1.y > 0 ){
			this.direction = -1;
		}
	},

	start: function(){
		game.state.start('choose-build');
	}
};