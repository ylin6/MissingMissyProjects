var chooseBuildState = {
	preload: function(){
		game.load.image('choose-build-bg', 'assets/build_robot.png' );

	},

	create: function(){
		game.stage.backgroundColor = "#b4a39c";
		var bg  = game.add.sprite(game.world.centerX, game.world.centerY, 'choose-build-bg');
		bg.anchor.setTo(0.5, 0.5);
		var scale = height/1400;
		bg.scale.setTo(scale, scale);
	}
}