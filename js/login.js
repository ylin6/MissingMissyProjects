var loginMenu = {
  cloud1: "", cloud2: "", cloud4: "", cloud5: "",
  direction: 1,

  preload: function(){
    // Load background and login images
    game.load.image('login-bg','assets/login_bg.png');
    game.load.image('login-form', 'assets/login_overlay.png' );

    // load cloud images
    game.load.image('cloud', 'assets/cloud.png');
  },

  create: function(){

    // assign sprites to variables
    var bg = game.add.sprite(game.world.centerX, game.world.centerY, 'login-bg');
    var form = game.add.sprite(game.world.centerX, game.world.centerY, 'login-form');

    // scale and anchor sprites
    var scale = width/4269;
    form.anchor.setTo(0.5);
    form.scale.setTo(0.6);
    bg.anchor.setTo(0.5);
    bg.scale.setTo(scale);
    this.start();

    // assign, scale and anchor cloud sprites
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
    // animate clouds
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

  start: function(){
    $('#signup-btn').click(signUp);

    function signUp(){
      var r = new Firebase("https://sizzling-inferno-4441.firebaseio.com");
      console.log("Clicked");
      r.createUser({
      email    : $('#signup-username').val(),
      password : $('#signup-password').val(),
      }, function(error, userData) {
        if (error) {
          $('#success').empty();
          $('#error').empty();
          $('#error').append(error);
          console.log("Error creating user:", error);
        } else {
          $('#success').empty();
          $('#error').empty();
          $('#success').append("Successfully created user account");
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });
    }

    $('#login-btn').click(login);

    function login(){
      var ref = new Firebase("https://sizzling-inferno-4441.firebaseio.com");
      ref.authWithPassword({
        email    : $('#username').val(),
        password : $('#password').val(),
      }, function(error, authData) {
        if (error) {
          $('#success').empty();
          $('#error').empty();
          $('#error').append(error);
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
          uid = authData.uid;
          $('.login-form').hide();
          game.state.start('menu');
        }
      });
    }
  },
};
