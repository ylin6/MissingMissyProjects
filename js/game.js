var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game-frame');
game.state.add('menu', menuState);
game.state.add('info', infoState);
game.state.add('choose-build', chooseBuildState);
game.state.add('build', build);

//SR
var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.start();
/*
recognition.onresult = function(event) { 
	console.log(event["results"][0][0]["transcript"]);
  	if(event["results"][0][0]["transcript"] == "play" && game.state["current"] == "menu"){
  		game.state.start('info')
  	} 
}*/
/*
recognition.onaudioend = function(event){
	recognition.onresult = function(event){
		if(game.state["current"] == "menu"){
			if(event["results"][0][0]["transcript"] == "play"){
  				game.state.start('info')
  			}
		}
		if(game.state["current"] == "info"){
			if(game.state.states["info"].textIndex == 0){
				game.state.states["info"].name = event["results"][0][0]["transcript"];
				game.state.states["info"].script[1] = "Hi " + game.state.states["info"].name + "! Can you tell me how old you are?";
				game.state.states["info"].textIndex+=1;
				game.state.states["info"].scriptText.setText(game.state.states["info"].script[game.state.states["info"].textIndex]);
			}

			else if(instance.textIndex == 1){
						game.state.states["info"].age = event["results"][0][0]["transcript"];
						console.log(game.state.states["info"].age);
						game.state.states["info"].scriptText.setText(game.state.states["info"].age + "? What a great age to be! Hey " + game.state.states["info"].name + " I seem to have lost my parts, will you help build me again?");
						game.state.states["info"].textIndex+=1;
					}

			else if (instance.textIndex == 2){
						console.log(event["results"][0][0]["transcript"]);
						game.state.states["info"].textIndex+=1;
						game.state.states["info"].scriptText.setText(game.state.states["info"].script[game.state.states["info"].textIndex]);
			}

			else{
						console.log(event["results"][0][0]["transcript"]);
						game.state.states["info"].openDoor();
			}
		}	
	}
}*/

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

