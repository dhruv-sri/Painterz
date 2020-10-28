$(document).ready(function(){
	$(".login-form").hide();
$(".login").css("background", "none");

$(".login").click(function(){
  $(".signup-form").hide();
  $(".login-form").show();
  $(".signup").css("background", "none");
  $(".login").css("background", "#fff");
});


$(".signup").click(function(){
  $(".login-form").hide();
  $(".signup-form").show();
  $(".login").css("background", "none");
  $(".signup").css("background", "#fff");
});

$(".btn").click(function(){
  $(".input").val("");
});})



  var firebaseConfig = {
    apiKey: "AIzaSyDLg2d40DtVn8BZF7J87nejDBYbCrOBdao",
    authDomain: "painterz-e63c0.firebaseapp.com",
    databaseURL: "https://painterz-e63c0.firebaseio.com",
    projectId: "painterz-e63c0",
    storageBucket: "painterz-e63c0.appspot.com",
    messagingSenderId: "790972299898",
    appId: "1:790972299898:web:ed1eadc9172b7cb9b2d9c3",
    measurementId: "G-G571KJGE03"
  };
  
  firebase.initializeApp(firebaseConfig);
  


  const auth =firebase.auth();

function signUp(){
var email= document.getElementById('email');
var password= document.getElementById('password');
const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
 promise.catch(e => alert(e.message));
    
 alert("Created Account Successfully, Now login");
}

function signIn(){
var email= document.getElementById('email1');
var password= document.getElementById('password1');
const promise = auth.signInWithEmailAndPassword(email.value, password.value);
 promise.catch(e => alert(e.message));
    
 
}
function signOut(){
auth.signOut();
 alert("Signed Out");
} 

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.open("index.html","_self");
  } else {
    // No user is signed in.
    alert("No such user exists")

  }
});