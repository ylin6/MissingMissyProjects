var level1 = {
	button1:"", button2:"", button3:"",
	button1Text:"", button2Text:"", button3Text:"",
	buttonGroup1:"", buttonGroup2:"", buttonGroup3:"",
	robot: "",
	cloud1: "", cloud2:"", cloud3:"", cloud4: "", cloud5:"",
	ship: "",
	water:"",
	kraken:"",
    missy:"",
    coin:"",
    score:"",
	kraken_arms:"",
	shark1:"", shark2:"", shark3:"",
	sail:"",
	gear: "",
	direction:1,
	shipDirection: -1,
	shipGroup:"", 
	advanceFlag:0,
	go: false,
	gear2:"",
    transition1:"",
    transition2:"",
    transition3:"",
    transition4:"",
	scriptText:"",
	script: [
			"Oh no! My boat is not painted the colors I wanted! I need your help. Can you say I’ll help you?",
			"Thanks! What color are the sails?",
			"Brown is no color for the high seas! What color should we paint them to?",
			"Great! You earned three coins for passing your first challenge! You can earn coins all over my house to buy me cool clothes and decorate my home! Now let’s set sail!!",
			"Oh no! The Kraken has risen from our plumbing system! We have to defeat it! Say the number of arms the Kraken has and I’ll throw my gears at them!",
			"Great job, how about now?",
			"You did it! Do you remember the name of the monster we defeated?",
			"You got a total of four coins from that Kraken!",
			"Oh man! It never ends! Sharks! Can you say “Sharp teeth?",
			"To defeat the sharks we have to throw a gear at different parts of their body! For the first shark we need to hit the mouth! Can you say mouth?",
			"Now the next one is weak at its nose, can you say nose?",
			"The final shark has a weak eyeball, can you say eyeball?",
			"You’re doing great! You should be our plumber!",
			"Look! There's Missy! Lets follow her into the next room"
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
        game.load.image('coin', 'assets/coin.png');
        game.load.image('missy', 'assets/missy.png');
		game.load.image('robot', base );
		game.load.image('cloud', 'assets/cloud.png');
		game.load.image('ship', 'assets/ship.png');
		game.load.image('sail', 'assets/sails.png');
		game.load.image('gear', 'assets/shipGear.png');
		game.load.image('water', 'assets/water.png');
		game.load.image('bg', 'assets/level1bg.png')
		game.load.image('kraken', 'assets/kraken.png');
		game.load.image('kraken-arms', 'assets/kraken_arms.png');
		game.load.image('shark1', 'assets/shark1.png');
		game.load.image('shark2', 'assets/shark2.png');
		game.load.image('shark3', 'assets/shark3.png');
		game.load.image('gears', 'assets/optionButton.png');
        game.load.image('homeButton', 'assets/home_button.png');
        game.load.image('transition1', 'assets/transition1.png');
        game.load.image('transition2', 'assets/transition2.png');
        game.load.image('transition3', 'assets/transition3.png');
        game.load.image('transition4', 'assets/transition4.png');
        
	},

	create: function(){
		var scale = height/1400;
		this.bg  = game.add.sprite(0, 0, 'bg');
		this.bg.scale.setTo(scale, scale);
		this.shipGroup = game.add.group();
		game.stage.backgroundColor = "#b4a39c";

		this.gear2 = game.add.sprite(game.world.width*4/7, game.world.centerY + 50, 'gears');
		this.gear2.anchor.setTo(0.5);
		this.gear2.visible = false;
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
		this.kraken = game.add.sprite(game.world.width * 4/5, game.world.height + 500, 'kraken');
		this.kraken_arms = game.add.sprite(game.world.width * 4/5, game.world.height + 500, 'kraken-arms');

		this.shark1 = game.add.sprite(game.world.width * 4/5, game.world.height + 500, 'shark1');
		this.shark1.anchor.setTo(0.5);
		this.shark1.scale.setTo(scale/2.2);
		this.shark3 = game.add.sprite(game.world.width * 4/5, game.world.height + 500, 'shark3');
		this.shark3.anchor.setTo(0.5);
		this.shark3.scale.setTo(scale/2.2);
		this.shark2 = game.add.sprite(game.world.width * 4/5, game.world.height + 500, 'shark2');
		this.shark2.anchor.setTo(0.5);
		this.shark2.scale.setTo(scale/2.2);
		this.kraken.anchor.setTo(0.5);
		this.kraken.scale.setTo(scale);
		this.kraken_arms.anchor.setTo(0.5);
		this.kraken_arms.scale.setTo(scale);

		this.water = game.add.sprite(0, 0, 'water');
		this.water.scale.setTo(scale, scale);
		this.cloud1.scale.setTo(0.52, 0.52);
		this.cloud2.scale.setTo(0.6, 0.6);
		this.cloud3.scale.setTo(0.5, 0.5);
		this.cloud4.scale.setTo(0.55, 0.53);
		this.cloud5.scale.setTo(0.47, 0.5);
		this.robot.scale.setTo(scale/3, scale/3);

		this.scriptText = game.add.text(game.world.centerX, game.world.height - 100, this.script[0]);
		this.speechSynth();
		this.scriptText.anchor.setTo(0.5);
		this.scriptText.addColor("#ffffff", 0)
		this.scriptText.fontSize = 18;
		this.sail.tint = "0x5E2612";

		var inputKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		inputKey.onDown.add(this.advance, this);

		var inputKey2 = game.input.keyboard.addKey(Phaser.Keyboard.S);
		inputKey2.onDown.add(this.transitionAnimation, this);

		// Answer Buttons
		this.button1 = game.add.button(game.world.centerX - 100, game.world.height - 50 , 'gears', this.answerCheck, this, 2, 1, 0);
		this.button1.anchor.setTo(0.5, 0.5)
		this.button1.scale.setTo(0.4, 0.4);
		this.button1.tint = "0xffcc38"

		this.button2 = game.add.button(game.world.centerX, game.world.height - 50 , 'gears', this.answerCheck, this, 2, 1, 0);
		this.button2.anchor.setTo(0.5, 0.5)
		this.button2.scale.setTo(0.4, 0.4);
		this.button2.tint = "0xffcc38";

		this.button3 = game.add.button(game.world.centerX + 100, game.world.height - 50 , 'gears', this.answerCheck, this, 2, 1, 0);
		this.button3.anchor.setTo(0.5, 0.5)
		this.button3.scale.setTo(0.4, 0.4);
		this.button3.tint = "0xffcc38";

		this.buttonText1 = game.add.text(game.world.centerX - 100, game.world.height - 50, "continue");
		this.buttonText1.anchor.setTo(0.5);
		this.buttonText1.fontSize = 16;

		this.buttonText2 = game.add.text(game.world.centerX, game.world.height - 50, "\"I'll Help You!\"");
		this.buttonText2.anchor.setTo(0.5);
		this.buttonText2.fontSize = 16;

		this.buttonText3 = game.add.text(game.world.centerX + 100, game.world.height - 50, "continue");
		this.buttonText3.anchor.setTo(0.5);
		this.buttonText3.fontSize = 16;

		this.buttonGroup1 = game.add.group();
		this.buttonGroup2 = game.add.group();
		this.buttonGroup3 = game.add.group();

		
		this.buttonGroup1.add(this.button1);
		this.buttonGroup1.add(this.buttonText1);

		
		this.buttonGroup2.add(this.button2);
		this.buttonGroup2.add(this.buttonText2);

		this.buttonGroup3.add(this.button3);
		this.buttonGroup3.add(this.buttonText3);

		this.button1.onInputOver.add(this.actionOver, this);
		this.button1.onInputOut.add(this.actionOut, this);

		this.button2.onInputOver.add(this.actionOver, this);
		this.button2.onInputOut.add(this.actionOut, this);

		this.button3.onInputOver.add(this.actionOver, this);
		this.button3.onInputOut.add(this.actionOut, this);

		this.buttonGroup1.visible = false;
		this.buttonGroup3.visible = false;
        
        this.missy = game.add.sprite(this.bg.width - 200, game.world.height * .48, 'missy');
        this.missy.scale.setTo(0.7);
        this.missy.anchor.setTo(0.5);
        this.coin = game.add.sprite(game.world.width - 50, 90, 'coin');
        this.coin.anchor.setTo(0.5);
        this.score = game.add.text(game.world.width - 150, 90, coins.toString());
        this.score.fontSize = 50;
        this.score.anchor.setTo(0.5);
        this.score.font = "Whitney";
        this.scriptText.font = "Whitney";
        this.buttonText1.font = "Whitney";
        this.buttonText2.font = "Whitney";
        this.buttonText3.font = "Whitney";
        var homeButton = game.add.button(30, game.world.height - 100 , 'homeButton', this.goHome, this, 2, 1, 0);
        homeButton.onInputOver.add(this.actionOver, this);
		homeButton.onInputOut.add(this.actionOut, this);

        this.transition1 = game.add.sprite(0, game.world.height, 'transition1');
        this.transition2 = game.add.sprite(game.world.width/4, -this.transition1.height, 'transition2');
        this.transition3 = game.add.sprite(game.world.width/2, game.world.height, 'transition3');
        this.transition4 = game.add.sprite(game.world.width * 3/4, -this.transition1.height, 'transition4');
        
        this.transition1.scale.setTo(scale*1.2);
        this.transition2.scale.setTo(scale*1.2);
        this.transition3.scale.setTo(scale*1.2);
        this.transition4.scale.setTo(scale*1.2);
	},
    
    
    transitionAnimation: function(){  
        var anim1 = game.add.tween(this.transition1);
		anim1.to({y:-500}, 1600, Phaser.Easing.Default, true);
        var anim2 = game.add.tween(this.transition2);
		anim2.to({y:-5}, 1600, Phaser.Easing.Default, true);
        var anim3 = game.add.tween(this.transition3);
		anim3.to({y:-500}, 1600, Phaser.Easing.Default, true);
        var anim4 = game.add.tween(this.transition4);
		anim4.to({y:-5}, 1600, Phaser.Easing.Default, true);
        
        anim4.onComplete.add(function(){
            game.state.start('endLevelMenu');
        }, this);
    },
    
    goHome: function(){
        game.state.start('house-menu');
    },
    
    getCoins: function(c){
        coins += c;
        this.score.setText(coins.toString());
        var anim = game.add.tween(this.coin);
		anim.to({angle: 720}, 600, Phaser.Easing.Default, true);   
    },

	answerCheck: function(r){
		if(this.advanceFlag == 0){
			this.buttonText3.setText("Blue");
			this.buttonText1.setText("Brown");
			this.buttonText2.setText("Green");

			this.buttonGroup1.visible = true;
			this.buttonGroup3.visible = true;

			this.advance();
		}

		else if (this.advanceFlag == 1 && r == this.button1){
			this.buttonText3.setText("Red");
			this.buttonText1.setText("Green");
			this.buttonText2.setText("Blue");
			this.advance();
		}
        
        else if (this.advanceFlag == 1 && r != this.button1){
			this.wrongAnswer();
		}
        
		else if(this.advanceFlag == 2 && r == this.button1){
			this.sail.tint = "0x22cc33";
			this.buttonGroup1.visible = false;
			this.buttonGroup2.visible = false;
			this.buttonGroup3.visible = false;
			this.advance();
		}

		else if(this.advanceFlag == 2 && r == this.button2){
			this.sail.tint = "0x2233cc";
			this.buttonGroup1.visible = false;
			this.buttonGroup2.visible = false;
			this.buttonGroup3.visible = false;
			this.advance();
		}

		else if(this.advanceFlag == 2 && r == this.button3){
			this.sail.tint = "0xcc2233";
			this.buttonGroup1.visible = false;
			this.buttonGroup2.visible = false;
			this.buttonGroup3.visible = false;
			this.advance();

		}

		else if (this.advanceFlag == 4 && r == this.button2){
			this.buttonText3.setText("2");
			this.buttonText1.setText("4");
			this.buttonText2.setText("6");
			this.advance();

		}
        
        else if (this.advanceFlag == 4 && r != this.button2){
			this.wrongAnswer();

		}

		else if(this.advanceFlag == 5 && r== this.button1){
			this.buttonText1.setText("Kraken");
			this.buttonText2.setText("BigFoot");
			this.buttonText3.setText("Loch Ness");
			this.advance();
		}

        else if(this.advanceFlag == 5 && r!= this.button1){
			this.wrongAnswer();
		}
        
        else if(this.advanceFlag == 6 && r!= this.button1){
			this.wrongAnswer();
		}
        
		else if(this.advanceFlag == 6 && r== this.button1){
			this.buttonGroup1.visible = false;
			this.buttonGroup2.visible = false;
			this.buttonGroup3.visible = false;
			this.advance();
		}

		else if(this.advanceFlag == 8 || this.advanceFlag == 9 || this.advanceFlag == 10 || this.advanceFlag == 11){
			if(this.advanceFlag == 8){
				this.buttonText2.setText("Mouth");
			}
			this.advance();
		}

	},

	actionOver: function(r){
		r.tint = "0x777777"
	},

	actionOut: function(r){
        if(r.key == "homeButton"){
           r.tint = "0xffffff";
        }  
        else{
		  r.tint = "0xffcc38";
        }
	},


	throwGear: function(){
		this.gear2.visible = true;
		var anim = game.add.tween(this.gear2);
		anim.to({angle: 720, x: game.world.width * 5/6, y: game.world.centerY + 200}, 600, Phaser.Easing.Default, true);
		var instance = this;
		anim.onComplete.add(function(){
			instance.gear2.visible = false;
			instance.gear2.x = game.world.width * 4/7;
			instance.gear2.y = game.world.centerY + 50;
			if(instance.advanceFlag == 5){
				instance.krakenHurt();
			}

			else if(instance.advanceFlag == 6){
				instance.krakenDies();
			}

			else if(instance.advanceFlag == 10){
				this.buttonText2.setText("Nose");
				instance.sharkDies(instance.shark1);
			}

			else if(this.advanceFlag == 11){
				this.buttonText2.setText("Eyeball");
				instance.sharkDies(instance.shark2);
			}

			else if(this.advanceFlag == 12){
				this.buttonGroup2.visible = false;
				instance.sharkDies(instance.shark3);
				instance.go = true;
			}
            

		}, this);
	},

	speechSynth: function(){
		var synth = window.speechSynthesis;
		var s = new SpeechSynthesisUtterance(this.script[this.advanceFlag]);
		synth.speak(s);
	},

	advance: function(){
		if(!this.go){
			this.advanceFlag += 1;
			if(this.advanceFlag == 3){
			// Change Color of sails
				game.time.events.add(11000, this.getInBoat, this);
                this.getCoins(3);
			}

			else if(this.advanceFlag == 5 || this.advanceFlag == 6 || this.advanceFlag == 10 || this.advanceFlag == 11 || this.advanceFlag == 12 ){
				this.throwGear();
			}

			else if(this.advanceFlag == 7){
                this.getCoins(4);
				this.go = true;
			}
            
            else if(this.advanceFlag == 13){
                this.missyEscapes();
            }

			this.speechSynth();
			this.scriptText.setText(this.script[this.advanceFlag]);
		}
	},

	krakenHurt: function(){
		var anim = game.add.tween(this.kraken_arms);
		anim.to({y: game.world.height + 1000}, 600, Phaser.Easing.Default, true);
	},

	krakenDies: function(){
		var anim = game.add.tween(this.kraken);
		anim.to({y: game.world.height + 1000}, 600, Phaser.Easing.Default, true);	
	},

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
		this.advance();
		this.buttonGroup1.visible = true;
		this.buttonGroup2.visible = true;
		this.buttonGroup3.visible = true;

		this.buttonText3.setText("4");
		this.buttonText1.setText("5");
		this.buttonText2.setText("8");


		var anim = game.add.tween(this.kraken);
		anim.to({y: game.world.height - 200}, 1300, Phaser.Easing.Default, true);
		var anim2 = game.add.tween(this.kraken_arms);
		anim2.to({y: game.world.height - 200}, 1300, Phaser.Easing.Default, true);
		console.log("krakenAttack");
	},

	sharkAttack: function(){
		this.buttonText2.setText("Sharp Teeth!");
		this.buttonGroup2.visible = true;
		this.advance();
		var anim1 = game.add.tween(this.shark1);
		anim1.to({y: game.world.height - 200}, 1300, Phaser.Easing.Default, true);

		var anim2 = game.add.tween(this.shark2);
		anim2.to({y: game.world.height - 200}, 1300, Phaser.Easing.Default, true);

		var anim3 = game.add.tween(this.shark3);
		anim3.to({y: game.world.height - 200}, 1300, Phaser.Easing.Default, true);
	},

	sharkDies: function(r){
		var anim = game.add.tween(r);
		anim.to({y: game.world.height + 1000}, 600, Phaser.Easing.Default, true);
	},

    missyEscapes: function(){
        console.log("missy");
        var instance = this;
        var anim = game.add.tween(this.missy);
        anim.to({x: this.missy.x + 130}, 800, Phaser.Easing.Default, true);
        anim.onComplete.add(function(){
            var anim2 = game.add.tween(instance.missy);
            anim2.to({y: instance.missy.y - game.world.height}, 1800, Phaser.Easing.Default, true);
            anim2.onComplete.add(this.transitionAnimation, this);
        }, this);
    },
    
    wrongAnswer:function(){
        var synth = window.speechSynthesis;
		var s = new SpeechSynthesisUtterance("Ooops. Try again!");
		synth.speak(s);
        this.scriptText.setText("Ooops. Try again!");
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

			this.bg.x -= 3;
            this.missy.x -= 3;
			this.water.x -=1;

			if(this.bg.x < -1 * (this.bg.width - this.game.world.width )){
				this.go = false;
				this.advance();
			}

			else if(this.bg.x < -1/4 * this.bg.width && this.bg.x > -1/4 * this.bg.width - 3){
				this.go = false;
				this.krakenAttack();
			}

			else if(this.bg.x < - 1/2 * this.bg.width && this.bg.x > -1/2 * this.bg.width - 3){
				this.go = false;
				this.sharkAttack();
			}
		}

		this.kraken.y += 0.05 * this.direction;
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