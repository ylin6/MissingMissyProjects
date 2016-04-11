var endLevelMenu = {
	preload: function(){
		game.load.image('bg', 'assets/end_level_menu.png' );
	},

    create: function(){
        var bg = game.add.sprite(0,0,'bg');
        var scale = width/2800;
		bg.scale.setTo(scale, scale);
        bg.scale.setTo(scale,scale);
    }
}