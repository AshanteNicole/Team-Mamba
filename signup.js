console.log("signup.js has been run");
var currentUserFirstName, currentUserLastName;
var newUserCreation = false;

// Set references to the FireBase datastore
var usersRef = firebase.database().ref("users");

// Auth State
firebase.auth().onAuthStateChanged(function (user) {
  if (user) { // When a user is signed in

    // Capture UserID and UserEmail
    var currentUserUID = user.uid.toString();
    var currentUserEmail = user.email.toString();

    // If a new user is being created, write other user data to FireBase
    if (newUserCreation) {
      usersRef.child(currentUserUID).child("creationdatetimeunix").set(new Date().getTime());
      usersRef.child(currentUserUID).child("creationdatetimestring").set(Date());
      usersRef.child(currentUserUID).child("email").set(currentUserEmail);
      usersRef.child(currentUserUID).child("uid").set(currentUserUID);
      usersRef.child(currentUserUID).child("firstname").set(currentUserFirstName.toString());
      usersRef.child(currentUserUID).child("lastname").set(currentUserLastName.toString());
    }

    // Forward user to the main page
    swal({
      title: "User signed in!",
      text: "You will be redirected to the main page.",
      type: "success",
      showCancelButton: false,
      confirmButtonClass: "btn-success",
      confirmButtonText: "OK",
      closeOnConfirm: true
    },
      function () {
        window.location.replace('index.html');
      });



  } else { // When a user is signed out
    // Do nothing
  }
});


$("#create-new-account-button").on("click", function (event) {
  var username = $("#new-email-input").val();
  var password = $("#new-password-input").val();
  currentUserFirstName = $("#new-first-name-input").val();
  currentUserLastName = $("#new-last-name-input").val();
  firebase.auth().createUserWithEmailAndPassword(username, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert(errorMessage);
  });
  newUserCreation = true;
});

