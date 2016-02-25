var build = {
	robot: "",
	colorIndex: 0,

	preload: function(){
		if(game.state.states["choose-build"].selectedRobot == "robot1"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.spritesheet('robot', 'assets/customRobot1/customRobotSprite1.png', 564, 1466, 3);
		}

		else if (game.state.states["choose-build"].selectedRobot == "robot2"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.image('robot', 'assets/robot2.png');
		}

		else if (game.state.states["choose-build"].selectedRobot == "robot3"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.image('robot', 'assets/robot3.png');
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
		robot.frame = 1;

		// buttons
		var button1 = game.add.button(game.world.centerX - 200, game.world.centerY - 225, 'button', this.actionOnClick, this, 2, 1, 0);
		var button2 = game.add.button(game.world.centerX - 200, game.world.centerY - 135, 'button', this.actionOnClick, this, 2, 1, 0);
		var button3 = game.add.button(game.world.centerX - 200, game.world.centerY, 'button', this.actionOnClick, this, 2, 1, 0);
		var button4 = game.add.button(game.world.centerX - 200, game.world.centerY + 135, 'button', this.actionOnClick, this, 2, 1, 0);
		var button5 = game.add.button(game.world.centerX - 200, game.world.centerY + 225, 'button', this.actionOnClick, this, 2, 1, 0);

		var button6 = game.add.button(game.world.centerX + 200, game.world.centerY - 225, 'button2', this.actionOnClick, this, 2, 1, 0);
		var button7 = game.add.button(game.world.centerX + 200, game.world.centerY - 135, 'button2', this.actionOnClick, this, 2, 1, 0);
		var button8 = game.add.button(game.world.centerX + 200, game.world.centerY, 'button2', this.actionOnClick, this, 2, 1, 0);
		var button9 = game.add.button(game.world.centerX + 200, game.world.centerY + 135, 'button2', this.actionOnClick, this, 2, 1, 0);
		var button10 = game.add.button(game.world.centerX + 200, game.world.centerY + 225, 'button2', this.actionOnClick, this, 2, 1, 0);

		button1.anchor.setTo(0.5);
		button2.anchor.setTo(0.5);
		button3.anchor.setTo(0.5);
		button4.anchor.setTo(0.5);
		button5.anchor.setTo(0.5);
		button6.anchor.setTo(0.5);
		button7.anchor.setTo(0.5);
		button8.anchor.setTo(0.5);
		button9.anchor.setTo(0.5);
		button10.anchor.setTo(0.5);

		button1.inputEnabled = true;
		button2.inputEnabled = true;
		button3.inputEnabled = true;
		button4.inputEnabled = true;
		button5.inputEnabled = true;
		button6.inputEnabled = true;
		button7.inputEnabled = true;
		button8.inputEnabled = true;
		button9.inputEnabled = true;
		button10.inputEnabled = true;


		
	},

	actionOnClick: function(){
		robot.frame = 2;
	}

}