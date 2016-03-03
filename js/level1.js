var level1 = {
	robot: "",
	cloud1: "", cloud2:"", cloud3:"",
	ship: "",
	water:"",
	platform:"",
	gear: "",
	direction:1,
	shipDirection: -1,

	preload: function(){
		var base = '';
		if (game.state.states["choose-build"].selectedRobot == "robot1"){
			base = "assets/customRobot1/robot1_" + game.state.states["build"].selectedRobot + ".png";
		}

		else if(game.state.states["choose-build"].selectedRobot == "robot2"){
			base = "assets/customRobot2/robot2_" + game.state.states["build"].selectedRobot + ".png";
		}

		else{
			base = "assets/customRobot3/robot3_c.png"
		}

		console.log(base);
		game.load.image('robot', base );
		game.load.image('cloud', 'assets/cloud.png');
		game.load.image('ship', 'assets/ship.png');
		game.load.image('platform', 'assets/platform.png');
		game.load.image('water', 'assets/water.png');

	},

	create: function(){
		var scale = height/1400;
		game.stage.backgroundColor = "#b4a39c";
		this.cloud2 = game.add.sprite(game.world.width * 3/5, -80, 'cloud');
		this.ship = game.add.sprite(game.world.width * 3/5, game.world.centerY, 'ship');
		this.cloud1 = game.add.sprite(game.world.centerX - 100, -108, 'cloud');
		this.cloud3 = game.add.sprite(game.world.width * 4/5, -88, 'cloud');
		this.platform  = game.add.sprite(0, game.world.height, 'platform');
		this.platform.anchor.setTo(0, 1);
		this.platform.scale.setTo(scale/2, scale/2);
		this.robot  = game.add.sprite(game.world.width * 1/6, game.world.centerY - this.platform.height/4 + 2, 'robot');
		this.robot.anchor.setTo(0.5);
		this.ship.scale.setTo(scale/2.5);
		this.ship.anchor.setTo(0.5);
		this.water = game.add.sprite(game.world.width, game.world.height, 'water');
		this.water.anchor.setTo(1, 1);
		this.water.scale.setTo(scale/2 * 1.5, scale/2);
		this.cloud1.scale.setTo(0.62, 0.62);
		this.cloud2.scale.setTo(0.7, 0.7);
		this.cloud3.scale.setTo(0.4, 0.4);
		this.robot.scale.setTo(scale/3, scale/3);


	},

	update: function(){
		this.cloud1.y += 0.3 * this.direction;
		this.cloud2.y -= 0.3 * this.direction;
		this.cloud3.y += 0.3 * this.direction;

		this.water.y -= 0.1 * this.direction;
		this.ship.y -= 0.1 * this.direction;

		if(this.cloud1.y < -110){
			this.direction = 1;
		}

		else if (this.cloud1.y > -80 ){
			this.direction = -1;
		}

		if(this.ship.y < game.world.width * 3/5 - 20){
			this.shipDirection = 1;
		}

		else if(this.ship.y > game.world.width * 3/5  + 10){
			this.shipDirection = -2;
		}
	}
}