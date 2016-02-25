var menuState = {
	bg : "",
	robot : "",
	gear1 : "", gear2 : "", gear3 : "", gear4 : "", gear5 : "", gear6 : "",
	robotAnimation : "",
	direction: 1,

	preload: function(){
		game.load.image('start-bg', 'assets/startpage.png' );
		game.load.image('start-robot', 'assets/startrobot.png');
		game.load.image('start-gear', 'assets/startgear.png');
	},

	create: function(){
		game.stage.backgroundColor = "#b4a39c";
		this.bg = game.add.sprite(game.world.centerX, game.world.centerY, 'start-bg');
		this.robot = game.add.sprite(game.world.centerX, game.world.height, 'start-robot');
		this.gear1 = game.add.sprite(0, 10, 'start-gear');
		this.gear2 = game.add.sprite(10, game.world.centerY -10, 'start-gear');
		this.gear3 = game.add.sprite(0, game.world.height-20, 'start-gear');
		this.gear4 = game.add.sprite(game.world.width, 10, 'start-gear');
		this.gear5 = game.add.sprite(game.world.width-10, game.world.centerY -10, 'start-gear');
		this.gear6 = game.add.sprite(game.world.width-10, game.world.height-20, 'start-gear');

		this.gear1.anchor.setTo(0.5, 0.5);
		this.gear2.anchor.setTo(0.5, 0.5);
		this.gear3.anchor.setTo(0.5, 0.5);
		this.gear1.scale.setTo(0.30, 0.30);
		this.gear2.scale.setTo(0.20, 0.20);
		this.gear3.scale.setTo(0.40, 0.40);
		this.gear4.anchor.setTo(0.5, 0.5);
		this.gear5.anchor.setTo(0.5, 0.5);
		this.gear6.anchor.setTo(0.5, 0.5);
		this.gear4.scale.setTo(0.30, 0.30);
		this.gear5.scale.setTo(0.20, 0.20);
		this.gear6.scale.setTo(0.40, 0.40);


		this.robot.anchor.setTo(0.5, 1);
		this.robot.scale.setTo(0.20, 0.2);

		this.robot.animations.add('move');
		this.robot.animations.play('move', 15, true);

		this.bg.anchor.setTo(0.5, 0.5);
		var scale = height/1400;
		this.bg.scale.setTo(scale, scale);
		
		var inputKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		inputKey.onDown.addOnce(this.start, this);


		// Speach recognition
		
		recognition.onresult = function(event) { 
			console.log(event["results"][0][0]["transcript"]);
  			if(event["results"][0][0]["transcript"] == "play"){
  				game.state.start('info')
  			}	 
		}
	},

	update: function(){

		this.gear1.angle += 1;
		this.gear2.angle -= 1;
		this.gear3.angle += 1;
		this.gear4.angle -= 1;
		this.gear5.angle += 1;
		this.gear6.angle -= 1;

		this.robot.x += 2 * this.direction;

		if(this.robot.x < game.world.centerX - 100){
			this.direction = 1;
		}

		else if (this.robot.x > game.world.centerX + 100){
			this.direction = -1;
		}
	},

	start: function(){
		game.state.start('info');
	}
};