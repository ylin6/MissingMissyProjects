var endLevelMenu = {
    homeButton:"",
    nextButton:"",
    cloud1: "", cloud2: "", cloud4: "", cloud5: "",
    direction: 1,
    
	preload: function(){
		game.load.image('bg', 'assets/end_level_menu.png' );
        game.load.image('homeButton', 'assets/home_button.png');
        game.load.image('nextButton', 'assets/forwardButton.png');
        game.load.image('cloud', 'assets/cloud.png');
	},

    create: function(){
        var bg = game.add.sprite(0,0,'bg');
        var scale = width/2800;
		bg.scale.setTo(scale, scale);
        bg.scale.setTo(scale,scale);
        var scoreText = game.add.text(game.world.centerX - 30, game.world.centerY - 70, coins);
        scoreText.anchor.setTo(0.5);
        scoreText.fontSize = 70;
        scoreText.addColor("#ffffff", 0);  
        
        homeButton = game.add.button(game.world.centerX - 80, game.world.centerY + 80 , 'homeButton', function(){
            game.state.start('house-menu');
        }, this, 2, 1, 0);
        homeButton.anchor.setTo(0.5);
        homeButton.onInputOver.add(this.actionOver, this);
		homeButton.onInputOut.add(this.actionOut, this);
        
        nextButton = game.add.button(game.world.centerX + 80, game.world.centerY + 80 , 'nextButton', function(){
            //game.state.start('house-menu');
        }, this, 2, 1, 0);
        nextButton.anchor.setTo(0.5);
        nextButton.onInputOver.add(this.actionOver, this);
		nextButton.onInputOut.add(this.actionOut, this);
        
        //clouds
        this.cloud1 = game.add.sprite(50, -18, 'cloud');
		this.cloud2 = game.add.sprite(game.world.centerX * 1/2 - 50, -30, 'cloud');
		this.cloud4 = game.add.sprite(game.world.centerX * 5/4, -30, 'cloud');
		this.cloud5 = game.add.sprite(width - 50, -25, 'cloud');
		this.cloud1.scale.setTo(0.45, 0.45);
		this.cloud2.scale.setTo(0.38, 0.38);
		this.cloud4.scale.setTo(0.49, 0.49);
		this.cloud5.scale.setTo(0.57, 0.57);
		this.cloud5.anchor.setTo(1,0);
    },
        
    update: function(){  
        this.cloud1.y += 0.3 * this.direction;
		this.cloud2.y -= 0.3 * this.direction;
		this.cloud4.y -= 0.3 * this.direction;
		this.cloud5.y += 0.3 * this.direction;

		if(this.cloud1.y < -40){
			this.direction = 1;
		}

		else if (this.cloud1.y > 0 ){
			this.direction = -1;
		}
    },
    
    actionOver: function(r){
		r.tint = "0x777777";
	},

	actionOut: function(r){
        if(r.key == "homeButton" || "nextButton"){
           r.tint = "0xffffff";
        }  
        else{
		  r.tint = "0xffcc38";
        }
	},
}