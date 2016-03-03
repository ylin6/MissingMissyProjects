var build = {
	robot: "",
	colorIndex: 0,
	selectedRobot:"",

	preload: function(){
		if(game.state.states["choose-build"].selectedRobot == "robot1"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.spritesheet('robot', 'assets/customRobot1/customRobotSprite1.png', 701, 1724, 3);
		}

		else if (game.state.states["choose-build"].selectedRobot == "robot2"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.spritesheet('robot', 'assets/customRobot2/customRobotSprite2.png', 926.3, 1661, 3);
		}

		else if (game.state.states["choose-build"].selectedRobot == "robot3"){
			console.log(game.state.states["choose-build"].selectedRobot);
			game.load.spritesheet('robot', 'assets/customRobot3/customRobotSprite3.png', 799, 1694, 3 );
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

		var inputKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		inputKey.onDown.add(this.goToMenu, this);

		
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
	},

	goToMenu: function(){
		if(robot.frame == 0){
			this.selectedRobot = "a";
		}

		else if (robot.frame == 1){
			this.selectedRobot = "b";
		}

		else{
			this.selectedRobot = "c";
		}

		game.state.start('house-menu')
	}	

}