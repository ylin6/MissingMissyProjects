var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, 'game-frame');
game.state.add('menu', menuState);
game.state.start('menu');
