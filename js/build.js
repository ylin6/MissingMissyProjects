var build = {
	robot: "",
	colorIndex: 0,

	preload: function(){
		console.log
		if(game.state.states["choose-build"].selectedRobot == "robot1"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.spritesheet('robot', 'assets/customRobot1/customRobotSprite1.png', 564, 1466, 3);
		}

		else if (game.state.states["choose-build"].selectedRobot == "robot2"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.spritesheet('robot', 'assets/customRobot2/customRobotSprite2.png', 627, 1434, 3);
		}

		else if (game.state.states["choose-build"].selectedRobot == "robot3"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.spritesheet('robot', 'assets/customRobot3/customRobotSprite3.png', 754, 1435, 3 );
		}
		
		game.load.image('button', 'assets/arrowbutton.png');
		game.load.image('button2', 'assets/arrowbutton2.png');
	},

	create: function(){
		// robots
		robot = game.add.sprite(game.world.centerX, game.world.centerY, 'robot');
		robot.anchor.setTo(0.5);
		var scale = height/1400;
		robot.scale.setTo(scale/1.5, scale/1.5);
		robot.frame = 0;

		// buttons
		var button1 = game.add.button(game.world.centerX - 200, game.world.centerY , 'button', this.actionOnClick, this, 2, 1, 0);
		var button2 = game.add.button(game.world.centerX + 200, game.world.centerY , 'button2', this.actionOnClick, this, 2, 1, 0);
		
		button1.anchor.setTo(0.5);
		button2.anchor.setTo(0.5);

		button1.inputEnabled = true;
		button2.inputEnabled = true;
		
	},

	actionOnClick: function(r){
		console.log(r.key);
		console.log(robot.frame);

		if(r.key == "button2" && robot.frame < 3){
			robot.frame += 1;
		}

		else if (r.key == "button2" && robot.frame  == 2){
			robot.frame = 0;
		}

		else if (r.key == "button" && robot.frame > 0){
			robot.frame -= 1;
		}

		else if (r.key == "button" && robot.frame == 0){
			robot.frame = 2;
		}
	}	

}