//var r = new Firebase("https://sizzling-inferno-4441.firebaseio.com");
$('#signup-btn').click(signUp);

function signUp(){
  var r = new Firebase("https://sizzling-inferno-4441.firebaseio.com");
  console.log("Clicked");
  r.createUser({
  email    : $('#signup-username').val(),
  password : $('#signup-password').val(),
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
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
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      window.location.replace("./home.html");
    }
  });
}
