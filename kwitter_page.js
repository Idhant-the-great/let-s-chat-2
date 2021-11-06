const firebaseConfig = {
      apiKey: "AIzaSyAcMjlR03pYKvR4jF5hDNnKj8szdPHQnog",
      authDomain: "lets-chat-b01c4.firebaseapp.com",
      databaseURL: "https://lets-chat-b01c4-default-rtdb.firebaseio.com",
      projectId: "lets-chat-b01c4",
      storageBucket: "lets-chat-b01c4.appspot.com",
      messagingSenderId: "423302646874",
      appId: "1:423302646874:web:e424b766873d64b97e9c63",
      measurementId: "G-CPSX7E80RV"
    };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

document.getElementById("room").innerHTML="Room Name"+":"+room_name;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      console.log("send");
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}
