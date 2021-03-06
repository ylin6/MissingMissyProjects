var chooseBuildState = {
	robot1: "", robot2: "", robot3: "",
	robotText1: "", robotText2: "", robotText3: "",
	selectedRobot:"",

	preload: function(){
		game.load.image('robot1', 'assets/customRobot1/robot1_a.png' );
		game.load.image('robot2', 'assets/customRobot2/robot2_a.png' );
		game.load.image('robot3', 'assets/customRobot3/robot3_a.png' );
		game.load.image('robot1_shadow', 'assets/customRobot1/robot1_shadow.png' );
		game.load.image('robot2_shadow', 'assets/customRobot2/robot2_shadow.png' );
		game.load.image('robot3_shadow', 'assets/customRobot3/robot3_shadow.png' );
	},

	selectR: function(r){
		if(r == robot1){
			this.selectedRobot = "robot1";
			game.state.start('build')
		}

		else if (r == robot2){
			this.selectedRobot = "robot2";
			game.state.start('build');
		}

		else if (r== robot3){
			this.selectedRobot = "robot3";
			game.state.start('build');
		}
	},

	create: function(){
		game.stage.backgroundColor = "#b4a39c";

		var robot1_shadow  = game.add.sprite(game.world.width * 1/4 - 10, game.world.centerY + 10, 'robot1_shadow');
		var robot2_shadow  = game.add.sprite(game.world.width * 2/4 - 10, game.world.centerY + 10, 'robot2_shadow');
		var robot3_shadow  = game.add.sprite(game.world.width * 3/4 - 10, game.world.centerY + 10, 'robot3_shadow');
		
		robot1  = game.add.sprite(game.world.width * 1/4, game.world.centerY, 'robot1');
		robot2  = game.add.sprite(game.world.width * 2/4, game.world.centerY, 'robot2');
		robot3  = game.add.sprite(game.world.width * 3/4, game.world.centerY, 'robot3');
		
		robot1.anchor.setTo(0.5, 0.5);
		robot2.anchor.setTo(0.5, 0.5);
		robot3.anchor.setTo(0.5, 0.5);

		robot1_shadow.anchor.setTo(0.5, 0.5);
		robot2_shadow.anchor.setTo(0.5, 0.5);
		robot3_shadow.anchor.setTo(0.5, 0.5);

		var scale = height/1400;
		robot1.scale.setTo(scale/2.0, scale/2.0);
		robot2.scale.setTo(scale/2.0, scale/2.0);
		robot3.scale.setTo(scale/2.0, scale/2.0);

		robot1_shadow.scale.setTo(scale/2.0, scale/2.0);
		robot2_shadow.scale.setTo(scale/2.0, scale/2.0);
		robot3_shadow.scale.setTo(scale/2.0, scale/2.0);

		robotText1 = game.add.text(game.world.width * 1/4, game.world.height* 6/7, "Rob");
		robotText2 = game.add.text(game.world.width * 2/4, game.world.height* 6/7, "Henry");
		robotText3 = game.add.text(game.world.width * 3/4, game.world.height* 6/7, "Ben");

		robotText1.font = 'Bicycle';
		robotText1.addColor("#ffffff", 0)
		robotText1.fontSize = 40;

		robotText2.font = 'Bicycle';
		robotText2.addColor("#ffffff", 0)
		robotText2.fontSize = 40;

		robotText3.font = 'Bicycle';
		robotText3.addColor("#ffffff", 0)
		robotText3.fontSize = 40;

		robotText1.anchor.setTo(0.5, 0.5);
		robotText2.anchor.setTo(0.5, 0.5);
		robotText3.anchor.setTo(0.5, 0.5);

		robot1.inputEnabled = true;
		robot2.inputEnabled = true;
		robot3.inputEnabled = true;

		var titleText = game.add.text(game.world.centerX, game.world.centerY/5, "PICK YOUR ROBOT TO BUILD");
		titleText.anchor.setTo(0.5, 0.5);
		titleText.fixedToCamera = true;
		titleText.font = 'Bicycle Fancy';
		titleText.addColor("#ffffff", 0);
		titleText.fontSize = 80;

		robot1.events.onInputDown.add(this.selectR, this);
		robot2.events.onInputDown.add(this.selectR, this);
		robot3.events.onInputDown.add(this.selectR, this);

		instance = this;
		
		/*
		recognition.start();
		recognition.onresult = function(event) { 
			console.log(event["results"][0][0]["transcript"]);
			if (event["results"][0][0]["transcript"] == "Rob"){
				instance.selectedRobot = "robot1";
			}

			else if (event["results"][0][0]["transcript"] == "Henry"){
				instance.selectedRobot ="robot2";
			}

			else{
				instance.selectedRobot =="robot3";
			}

			game.state.start("build");
		}*/

	},

	actionOver: function(){
		this.button.tint = "0x333333"
	},

	actionOut: function(){
		this.button.tint = "0xffffff"
	},

	update: function(){
		if(robot1.input.pointerOver()){
			robot1.tint = "0x333333";
			robotText1.addColor("#333333", 0);
		}

		else{
			robot1.tint = "0xFFFFFF";
			robotText1.addColor("#FFFFFF", 0);
		}

		if(robot2.input.pointerOver()){
			robot2.tint = "0x333333";
			robotText2.addColor("#333333", 0)
		}
		else{
			robot2.tint = "0xFFFFFF";
			robotText2.addColor("#FFFFFF", 0);
		}

		if(robot3.input.pointerOver()){
			robot3.tint = "0x333333";
			robotText3.addColor("#333333", 0)

		}

		else{
			robot3.tint = "0xFFFFFF";
			robotText3.addColor("#FFFFFF", 0);
		}
	}

}