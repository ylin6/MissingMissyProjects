var houseMenu = {
	preload: function(){
		game.load.image('bg', 'assets/menu_basic.png' );
	},

	create: function(){
		// robots
		var bg = game.add.sprite(game.world.centerX, game.world.centerY, 'bg');
		bg.anchor.setTo(0.5);
		var scale = height/3204;
		bg.scale.setTo(scale, scale);
		
		var inputKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		inputKey.onDown.add(this.gotLevel1, this);
	},

	gotLevel1: function(){
		game.state.start('level1');
	}
}