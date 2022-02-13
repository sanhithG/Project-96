// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOUIuwVz5ZLH6GRRqQKsnicsZcZzOyhxA",
    authDomain: "project-93-ba969.firebaseapp.com",
    databaseURL: "https://project-93-ba969-default-rtdb.firebaseio.com",
    projectId: "project-93-ba969",
    storageBucket: "project-93-ba969.appspot.com",
    messagingSenderId: "322958567838",
    appId: "1:322958567838:web:ef6a911b20e7351fff4e8f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {

    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name, 
          message:msg,
          like:0
    });
    document.getElementById("msg").value=" ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
