window.onload = function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	var game = new Phaser.Game(width, height, Phaser.AUTO, 'game-frame', { preload: preload, create: create, update: update });
	var bg;
	var robot;
	var gear1, gear2, gear3, gear4, gear5, gear6;
	var robotAnimation;
	var direction = 1;

	function preload(){
		game.load.image('start-bg', 'assets/startpage.png' );
		game.load.image('start-robot', 'assets/startrobot.png');
		game.load.image('start-gear', 'assets/startgear.png');
	}

	function create(){
		game.stage.backgroundColor = "#b4a39c"
		bg = game.add.sprite(game.world.centerX, game.world.centerY, 'start-bg');
		robot = game.add.sprite(game.world.centerX, game.world.height, 'start-robot');
		gear1 = game.add.sprite(0, 10, 'start-gear');
		gear2 = game.add.sprite(10, game.world.centerY -10, 'start-gear');
		gear3 = game.add.sprite(0, game.world.height-20, 'start-gear');
		gear4 = game.add.sprite(game.world.width, 10, 'start-gear');
		gear5 = game.add.sprite(game.world.width-10, game.world.centerY -10, 'start-gear');
		gear6 = game.add.sprite(game.world.width-10, game.world.height-20, 'start-gear');

		gear1.anchor.setTo(0.5, 0.5);
		gear2.anchor.setTo(0.5, 0.5);
		gear3.anchor.setTo(0.5, 0.5);
		gear1.scale.setTo(0.30, 0.30);
		gear2.scale.setTo(0.20, 0.20);
		gear3.scale.setTo(0.40, 0.40);
		gear4.anchor.setTo(0.5, 0.5);
		gear5.anchor.setTo(0.5, 0.5);
		gear6.anchor.setTo(0.5, 0.5);
		gear4.scale.setTo(0.30, 0.30);
		gear5.scale.setTo(0.20, 0.20);
		gear6.scale.setTo(0.40, 0.40);


		robot.anchor.setTo(0.5, 1);
		robot.scale.setTo(0.20, 0.2);

		robot.animations.add('move');
		robot.animations.play('move', 15, true);

		bg.anchor.setTo(0.5, 0.5);
		var scale = height/1400;
		bg.scale.setTo(scale, scale);
		

	}

	function update(){

		gear1.angle += 1;
		gear2.angle -= 1;
		gear3.angle += 1;
		gear4.angle -= 1;
		gear5.angle += 1;
		gear6.angle -= 1;

		robot.x += 2 * direction;;

		if(robot.x < game.world.centerX - 100){
			direction = 1;
		}

		else if (robot.x > game.world.centerX + 100){
			direction = -1;
		}
	}
}