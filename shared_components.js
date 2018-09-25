console.log("firebase_init.js has been run");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBz5Yz5lFITr72y93hWL7DorgJwS_PDzvY",
  authDomain: "user-authentication-d1074.firebaseapp.com",
  databaseURL: "https://user-authentication-d1074.firebaseio.com",
  projectId: "user-authentication-d1074",
  storageBucket: "user-authentication-d1074.appspot.com",
  messagingSenderId: "49160145019"
};
firebase.initializeApp(config);


// Authentication State Processor
firebase.auth().onAuthStateChanged(function (user) {
  if (user) { // When a user is signed in

    // Hide/show elements
    $(".authenticated-invisible").hide();
    $(".authenticated-visible").show();

    // Display user's email on navbar
    document.getElementById("login-id").innerHTML = user.email;

    // Enable logout button
    $("#logout-button").on("click", function (event) {
      event.preventDefault();
      swal("You have been signed out");
      firebase.auth().signOut();
    });

  } else { // When a user is signed out
    document.getElementById("login-id").innerHTML = "not logged in";

    // Hide/show elements
    $(".authenticated-invisible").show();
    $(".authenticated-visible").hide();

    // Disable logout button
    $("#logout-button").on("click", function (event) {
      event.preventDefault();
      // alert("User not signed in. Logout button disabled");
    });

  }
});
