/* Info.js */

var infoState = {
	robot: "",
	cloud1: "",
	cloud2: "",
	cloud3: "",
	cloud4: "",
	cloud5: "",
	direction: 1,
	textIndex: 0,
	scriptText: "",
	script: [
			"Hi there! My name is Rob Oto. Can you tell me what your name is?",
			"That’s a great name! Can you tell me how old you are?",
			"What a great age to be! Hey, I seem to have lost my parts, will you help build me again?",
			"My spare parts are locked in the garage, it only opens if you say 'Open Sesame'!"
			],
	ground: "",
	name: "",
	age: "",
	button: "",
	buttonText:"",


	preload: function(){
		game.load.image('info-cloud', 'assets/cloud.png');
		game.load.image('info-ground', 'assets/ground.png');
		game.load.image('info-robot-sprite', 'assets/customRobot1/robot1_a.png', 365, 492, 3);
		game.load.image('btn', 'assets/optionButton.png')
	},

	create: function(){

		game.stage.backgroundColor = "#b4a39c";
		this.ground  = game.add.sprite(0, game.world.height, 'info-ground');
		this.ground.anchor.setTo(0.5, 0.5);
		this.ground.scale.setTo(this.game.width/this.ground.width * 2, 1);
		this.robot = game.add.sprite(game.world.centerX, game.world.height - this.ground.height/2, 'info-robot-sprite');
		this.scriptText = game.add.text(game.world.centerX, game.world.height - this.ground.height/2 + 20, this.script[0]);
		this.scriptText.anchor.setTo(0.5);
		this.robot.anchor.setTo(1,1);
		var scale = height/1400;
		this.robot.scale.setTo(scale/2.5, scale/2.5);
		this.cloud1 = game.add.sprite(50, -18, 'info-cloud');
		this.cloud2 = game.add.sprite(game.world.centerX * 1/2 - 50, -30, 'info-cloud');
		this.cloud3 = game.add.sprite(game.world.centerX, -20, 'info-cloud');
		this.cloud4 = game.add.sprite(game.world.centerX * 5/4, -30, 'info-cloud');
		this.cloud5 = game.add.sprite(width - 50, -25, 'info-cloud');
		this.cloud3.anchor.setTo(0.5, 0);
		this.cloud1.scale.setTo(0.45, 0.45);
		this.cloud2.scale.setTo(0.38, 0.38);
		this.cloud3.scale.setTo(0.6, 0.6);
		this.cloud4.scale.setTo(0.49, 0.49);
		this.cloud5.scale.setTo(0.57, 0.57);
		this.cloud5.anchor.setTo(1,0);

		this.scriptText.fontSize = 18;
		this.scriptText.font = 'Whitney';

		var inputKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		inputKey.onDown.add(this.advanceScript, this);

		this.button = game.add.button(game.world.width/2, game.world.height - this.ground.height/2 + 40 , 'btn', this.advanceScript, this, 2, 1, 0);
		this.button.anchor.setTo(0.5, 0)
		this.button.scale.setTo(0.4, 0.4);
		this.button.tint = "0xffcc38"

		this.button.onInputOver.add(this.actionOver, this);
		this.button.onInputOut.add(this.actionOut, this);
		this.buttonText = game.add.text(game.world.centerX, game.world.height - this.ground.height/2 +  this.button.height * 3/2, "continue");
		this.buttonText.anchor.setTo(0.5);
		this.buttonText.fontSize = 16;
		//this.buttonText.addColor("#ffffff", 0)
		// Speech Recognition
		/*
		recognition.start();
		instance = this;
		recognition.onresult = function(event) { 
			instance.name = event["results"][0][0]["transcript"];
			instance.script[1] = "Hi " + instance.name + "! Can you tell me how old you are?";
			console.log(instance.script[1]);
			instance.textIndex+=1;
			instance.scriptText.setText(instance.script[instance.textIndex]);	
		}*/

		/*
		recognition.onend = function(event){
				
				if(instance.textIndex < 4){
					recognition.start();
				}
				
				recognition.onresult = function(event){
					if(instance.textIndex == 1){
						instance.age = event["results"][0][0]["transcript"];
						console.log(instance.age);
						instance.scriptText.setText(instance.age + "? What a great age to be! Hey " + instance.name + " I seem to have lost my parts, will you help build me again?");
						instance.textIndex+=1;
					}

					else if (instance.textIndex == 2){
						console.log(event["results"][0][0]["transcript"]);
						instance.textIndex+=1;
						instance.scriptText.setText(instance.script[instance.textIndex]);
					}

					else{
						console.log(event["results"][0][0]["transcript"]);
						instance.textIndex += 1;
						instance.openDoor();
					}

			}
		}*/

		this.speechSynth();


	},

	speechSynth: function(){
		var synth = window.speechSynthesis;
		var s = new SpeechSynthesisUtterance(this.script[this.textIndex]);
		synth.speak(s);
	},

	actionOver: function(){
		this.button.tint = "0x777777"
	},

	actionOut: function(){
		this.button.tint = "0xffcc38"
	},

	advanceScript: function(){
		this.textIndex+=1;

		if(this.textIndex == 2){
			this.buttonText.setText("Yes, I'll Help You!");
		}

		else if (this.textIndex == 3){
			this.buttonText.setText("'Open Sesame'");
		}
		else if(this.textIndex >= 4) {
			this.openDoor();
			return;
		}
		this.speechSynth();
		this.scriptText.setText(this.script[this.textIndex]);
		instance = this;
		/*
		recognition.onresult = function(event){
			instance.age = event["results"][0][0]["transcript"];
			console.log(instance.age);
			instance.scriptText[2] = age + "? What a great age to be! Hey " + instance.name + " I seem to have lost my parts, will you help build me again?";
			instance.textIndex+=1;
			instance.scriptText.setText(instance.script[instance.textIndex]);
		}	*/
		
	},

	openDoor: function(){
		var openMotion = game.add.tween(this.ground);
		openMotion.to({x: - 200}, 3000, Phaser.Easing.Default, true);
		openMotion.onComplete.add(this.start, this);
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