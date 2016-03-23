var level1 = {
	robot: "",
	cloud1: "", cloud2:"", cloud3:"", cloud4: "", cloud5:"",
	ship: "",
	water:"",
	sail:"",
	gear: "",
	direction:1,
	shipDirection: -1,
	shipGroup:"", 
	advanceFlag:0,
	go: false,
	scriptText:"",
	script: [
			"Oh no! My boat is not painted the colors I wanted! I need your help. Can you say I’ll help you?",
			"Thanks! What color are the sails?",
			"Brown is no color for the high seas! What color should we paint them to?",
			"Great! You earned three coins for passing your first challenge! You can earn coins all over my house to buy me cool clothes and decorate my home! Now let’s set sail!!",
			"Oh no! The Kraken has risen from our plumbing system! We have to defeat it! Say the number of arms the Kraken has out of the water and I’ll throw my gears at them!",
			"Great job Benjamin, how about now?",
			"You did it! Do you remember the name of the monster we defeated?",
			"You got a total of four coins from that Kraken!",
			"Oh man! It never ends! Sharks! Can you say “Sharp teeth?",
			"To defeat the sharks we have to throw a gear at different parts of their body! For the first shark we need to hit the mouth! Can you say mouth?",
			"Now the next one is weak at its nose, can you say nose?",
			"The final shark has a weak eyeball, can you say eyeball?",
			"You’re doing great! You should be our plumber!",
			"Look! There's Missy!"
	],

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
		game.load.image('sail', 'assets/sails.png');
		game.load.image('gear', 'assets/shipGear.png');
		game.load.image('water', 'assets/water.png');
		game.load.image('bg', 'assets/level1bg.png')

	},

	create: function(){
		var scale = height/1400;
		this.bg  = game.add.sprite(0, 0, 'bg');
		this.bg.scale.setTo(scale, scale);
		this.shipGroup = game.add.group();
		game.stage.backgroundColor = "#b4a39c";

		// Ship Group
		this.sail = game.add.sprite(game.world.width * 3/5, game.world.centerY, 'sail');
		this.ship = game.add.sprite(game.world.width * 3/5, game.world.centerY, 'ship');

		this.robot  = game.add.sprite(game.world.width * 1/6, game.world.height * .45, 'robot');
		this.gear = game.add.sprite(game.world.width * 3/5, game.world.centerY, 'gear');
		
		this.shipGroup.add(this.sail);
		this.shipGroup.add(this.ship);
		this.shipGroup.add(this.gear);

		this.shipGroup.children.forEach(function(s){
    		s.anchor.setTo(0.5,0.5);
    		if(s.key == "gear"){
				s.y = 1150;
				s.x = 650;
    		}

		});

		this.shipGroup.x = game.world.width * .35;
		this.shipGroup.y = game.world.centerY - 50;
		this.shipGroup.scale.setTo(scale/2.5, scale/2.5);

		this.cloud1 = game.add.sprite(game.world.width * 2/5, -80, 'cloud');
		this.cloud2 = game.add.sprite(game.world.width * 3/5, -90, 'cloud');
		this.cloud3 = game.add.sprite(game.world.width * 4/5, -108, 'cloud');
		this.cloud4 = game.add.sprite(game.world.width * 6/5, -88, 'cloud');
		this.cloud5 = game.add.sprite(game.world.width * 7/5, -98, 'cloud');

		

		this.robot.anchor.setTo(0.5);
		this.water = game.add.sprite(0, 0, 'water');
		this.water.scale.setTo(scale, scale);
		this.cloud1.scale.setTo(0.52, 0.52);
		this.cloud2.scale.setTo(0.6, 0.6);
		this.cloud3.scale.setTo(0.5, 0.5);
		this.cloud4.scale.setTo(0.55, 0.53);
		this.cloud5.scale.setTo(0.47, 0.5);
		this.robot.scale.setTo(scale/3, scale/3);

		this.scriptText = game.add.text(game.world.centerX, game.world.height - 20, this.script[0]);
		this.scriptText.anchor.setTo(0.5);
		this.scriptText.addColor("#ffffff", 0)
		this.scriptText.fontSize = 18;
		this.sail.tint = "0x5E2612"
		var inputKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		inputKey.onDown.add(this.advance, this);


	},

	advance: function(){
		if(!this.go){
			this.advanceFlag += 1;
			if(this.advanceFlag == 3){
			// Change Color of sails
				this.sail.tint = "0x13a89e";
				game.time.events.add(3000, this.getInBoat, this);
			}
			var text=this.script[this.advanceFlag];
			this.scriptText.setText(text);
			this.speak(text);
		}
	},

	speak: function(text){
		var synth=window.speechSynthesis;
		var s=new SpeechSynthesisUtterance(text);
		synth.speak(s);
	}

	getInBoat: function(){
		this.shipGroup.add(this.robot);
		this.shipGroup.bringToTop(this.ship);
		this.shipGroup.bringToTop(this.gear);
		this.robot.x = - 1000;
		this.robot.y = -100;
		this.robot.scale.setTo(0.8, 0.8);
		var anim = game.add.tween(this.robot);
		anim.to({x: 1200, y: 370}, 1000, Phaser.Easing.Default, true);
		this.go = true;	
	},

	krakenAttack: function(){
		console.log("krakenAttack");
	},

	update: function(){
		this.cloud1.y += 0.3 * this.direction;
		this.cloud2.y -= 0.3 * this.direction;
		this.cloud3.y += 0.3 * this.direction;
		this.cloud4.y -= 0.3 * this.direction;
		this.cloud5.y += 0.3 * this.direction;

		// animate clouds
		if(this.go){
			this.gear.angle += 1;
			if(this.cloud5.x > 0) {
				this.cloud1.x -= 1;
				this.cloud2.x -= 1;
				this.cloud3.x -= 1;
				this.cloud4.x -= 1;
				this.cloud5.x -= 1;
			}

			else{
				this.cloud1.x = game.world.width;
				this.cloud2.x = game.world.width * 6/5;
				this.cloud3.x = game.world.width * 7/5;
				this.cloud4.x = game.world.width * 8/5;
				this.cloud5.x = game.world.width * 9/5;
			}

			this.bg.x -= 5;
			this.water.x -=1;
			if(this.bg.x < -1 * (this.bg.width - this.game.world.width )){
				this.go = false;
			}

			else if(this.bg.x < -1/3 * this.bg.width){
				this.go = false;
				this.krakenAttack();
			}
		}

		this.water.y -= 0.1 * this.direction;
		this.shipGroup.y -= 0.1 * this.direction;

		if(this.cloud1.y < -110){
			this.direction = 1;
		}

		else if (this.cloud1.y > -80 ){
			this.direction = -1;
		}

		if(this.shipGroup.y < game.world.width * 3/5 - 20){
			this.shipDirection = 1;
		}

		else if(this.shipGroup.y > game.world.width * 3/5  + 10){
			this.shipDirection = -2;
		}
	}
}
