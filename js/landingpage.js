window.onload = function(){
	var width = window.innerWidth;
	var height = window.innerHeight;
	var game = new Phaser.Game(width, height, Phaser.AUTO, 'game-frame', { preload: preload, create: create, update: update });

	function preload(){
		game.load.image('start-bg', 'assets/startpage.png' );
	}

	function create(){
		var bg = game.add.sprite(0, 0, 'start-bg');
		bg.scale.setTo(0.30, 0.30);
	}

	function update(){

	}
}