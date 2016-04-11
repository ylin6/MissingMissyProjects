var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game-frame');

// User Settings
var set = false;
var coins = 0;
var robotModel;
var robotColorModel;
var startLevel;

// Adding Game States
game.state.add('endLevelMenu', endLevelMenu);
game.state.add("level1", level1);
game.state.add("house-menu", houseMenu);
game.state.add('menu', menuState);
game.state.add('info', infoState);
game.state.add('choose-build', chooseBuildState);
game.state.add('build', build);

//SR
/*
var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.start();*/

if(set){
	startLevel = 'houseMenu';
} else{
	startLevel = 'menu';
}

// Load fonts and then start game
WebFont.load({
	active: function() {
        console.log("font loaded");
        game.state.start('level1');
    },

	custom: {
      	families: ['Bicycle Fancy', 'Bicyle', 'Whitney'],
      	urls: ['../css/fonts.css']
    }
});
