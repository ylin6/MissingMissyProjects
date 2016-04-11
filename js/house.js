var houseMenu = {
	preload: function(){
		game.load.image('bg', 'assets/menu_basic.png' );
		/*
		game.load.image('level1', 'assets/level1map.png');
		game.load.image('level2', 'assets/level2map.png');
		game.load.image('level3', 'assets/level3map.png');
		game.load.image('level4', 'assets/level4map.png');
		game.load.image('level5', 'assets/level5map.png');
		game.load.image('level6', 'assets/level6map.png');
		game.load.image('level7', 'assets/level7map.png');*/
	},

	create: function(){
		// robots
		var bg = game.add.sprite(game.world.centerX, game.world.centerY, 'bg');
		var titleText = game.add.text( 50, 50, "SELECT A ROOM");
		titleText.fixedToCamera = true;
		titleText.font = 'Bicycle Fancy';
		titleText.addColor("#ffffff", 0)
		titleText.fontSize = 40;
		/*
		var level1 = game.add.sprite(game.world.centerX, game.world.centerY, 'level1');
		var level2 = game.add.sprite(game.world.centerX, game.world.centerY, 'level2');
		var level3 = game.add.sprite(game.world.centerX, game.world.centerY, 'level3');
		var level4 = game.add.sprite(game.world.centerX, game.world.centerY, 'level4');
		var level5 = game.add.sprite(game.world.centerX, game.world.centerY, 'level5');
		var level6 = game.add.sprite(game.world.centerX, game.world.centerY, 'level6');
		var level7 = game.add.sprite(game.world.centerX, game.world.centerY, 'level7');*/
		
		bg.anchor.setTo(0.5);
		/*
		level1.anchor.setTo(0.5);
		level2.anchor.setTo(0.5);
		level3.anchor.setTo(0.5);
		level4.anchor.setTo(0.5);
		level5.anchor.setTo(0.5);
		level6.anchor.setTo(0.5);
		level7.anchor.setTo(0.5);*/

		var scale = height/3204;
		bg.scale.setTo(scale, scale);
		/*
		level1.scale.setTo(scale, scale);
		level2.scale.setTo(scale, scale);
		level3.scale.setTo(scale, scale);
		level4.scale.setTo(scale, scale);
		level5.scale.setTo(scale, scale);
		level6.scale.setTo(scale, scale);
		level7.scale.setTo(scale, scale);

		
		level1.inputEnabled = true;
		level2.inputEnabled = true;
		level3.inputEnabled = true;
		level4.inputEnabled = true;
		level5.inputEnabled = true;
		level6.inputEnabled = true;
		level7.inputEnabled = true;


		level1.events.onInputOver.add(this.actionOver, this);
		level1.events.onInputOut.add(this.actionOut, this);
		level2.events.onInputOver.add(this.actionOver, this);
		level2.events.onInputOut.add(this.actionOut, this);
		level3.events.onInputOver.add(this.actionOver, this);
		level3.events.onInputOut.add(this.actionOut, this);
		level4.events.onInputOver.add(this.actionOver, this);
		level4.events.onInputOut.add(this.actionOut, this);
		level5.events.onInputOver.add(this.actionOver, this);
		level5.events.onInputOut.add(this.actionOut, this);
		level6.events.onInputOver.add(this.actionOver, this);
		level6.events.onInputOut.add(this.actionOut, this);
		level7.events.onInputOver.add(this.actionOver, this);
		level7.events.onInputOut.add(this.actionOut, this);*/


		
		var inputKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		inputKey.onDown.add(this.gotLevel1, this);
		bg.inputEnabled = true;
		bg.events.onInputDown.add(this.gotLevel1, this);
        
        this.speechSynth("My beautiful cat, Missy, is missing in my giant mansion! Can you help me find her? Let’s start in my basement! We’ve had a bit of a plumbing problem, but I bought a boat! Click on the basement to go inside!");
	},
    
    speechSynth: function(script){
        var synth = window.speechSynthesis;
		var s = new SpeechSynthesisUtterance(script);
		synth.speak(s);
    },

	actionOver: function(r){
		console.log(r);
		r.tint = "0x333333"
	},

	actionOut: function(r){
		r.tint = "0xffffff"
	},
	gotLevel1: function(){
		console.log("level1");
		game.state.start('level1');
	}
}