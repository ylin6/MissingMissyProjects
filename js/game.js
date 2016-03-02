var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game-frame');
game.state.add('menu', menuState);
game.state.add('info', infoState);
game.state.add('choose-build', chooseBuildState);
game.state.add('build', build);

//SR

/*
var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.start();*/

WebFont.load({
	active: function() { 
        console.log("font loaded");
        game.state.start('menu');
    },
	
	custom: {
      	families: ['Bicycle Fancy', 'Bicyle'],
      	urls: ['../css/fonts.css']
    }		
});

