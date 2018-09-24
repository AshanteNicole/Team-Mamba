var topFive = [1, 2, 1027, 52, 1437]; // Bitcoin ID from coinmarketcap.com

// Set global variables
var currentUserUID = null
  , currentUserEmail = null
  , currentUserBankAccountValue = null
  , currentHour = null
  , timer = null
  , investmentTotal = 0
  , coinCounts = null
  , currentCoinDataSnapshot = null
  , journalSnapshot = null
  , coinCounts = {};

// Set references to the FireBase datastore
var database = firebase.database();
var rootRef = firebase.database().ref();
var usersRef = firebase.database().ref("users");
var personalTransactionsRef = firebase.database().ref("personaltransactions");
var apiDataRef = firebase.database().ref("apidata");


// Returns current price based on API data
function getCurrentPrice(coinSymbol) {
  for (let key in coinMarketCapData["data"]) {
    if (coinMarketCapData["data"][key]["symbol"] === coinSymbol) {
      return coinMarketCapData["data"][key]["quotes"]["USD"]["price"];
    }
  }
}

// Timer function that checks for the latest Crypto Currency Data
// function startTimer() {
//   console.log("startTimer() has been called."); // Remove this line for the final product
//   calculateCurrentHour();
//   checkCurrentCoinData();
//   timer = setInterval(function () {
//     var myVar = new Date();
//     if (myVar.getSeconds() % 30 === 0) {
//       // Every 20 seconds, run this code block
//       calculateCurrentHour();
//       checkCurrentCoinData();
//       calculatePortfolioSummary();
//     }
//   }, 1000);
// }


// Function for calculating current hour in Unix Time
// function calculateCurrentHour() {
//   console.log("calculateCurrentHour() has been called. Calculating current hour..."); // Remove this line for the final product
//   var year = String(new Date().getFullYear());
//   var month = String(new Date().getMonth() + 1);
//   if (month.length === 1) { month = "0" + month };
//   var day = String(new Date().getDate());
//   if (day.length === 1) { day = "0" + day };
//   var hour = String(new Date().getHours());
//   if (hour.length === 1) { hour = "0" + hour };
//   currentHour = parseInt(new Date(`${year}-${month}-${day}T${hour}:00:00`).getTime());
//   console.log(`currentHour = ${currentHour}`); // Remove this line for the final product
// }


// Function to check if there is data for the current hour in FireBase.


// FireBase Observer for User Account Information
function renderUserInfo() {
  usersRef.child(currentUserUID).once("value", function (snapshot) {
    var snapshotValues = snapshot.val();
    $("#current-user-info").empty();
    $("#current-user-info").append(JSON.stringify(snapshotValues) + "<br/>");
    $("#current-user-info").append(`Updated: ${Date()}`);

  }, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
}

function checkCurrentCoinData() {
  // Write code here to download latest cryptocurrency data from API

  for (let i = 0; i < topFive.length; i++) {
    let coinID = topFive[i]

    let tableRowElement = $("<tr>");
    let nameCell = $("<td>")
      .attr("class", "text-center")
      .text(coinMarketCapData["data"][coinID]["name"]);
    let symbolCell = $("<td>")
      .attr("class", "text-center")
      .text(coinMarketCapData["data"][coinID]["symbol"]);
    let rankCell = $("<td>")
      .attr("class", "text-center")
      .text(coinMarketCapData["data"][coinID]["rank"]);
    let priceCell = $("<td>")
      .attr("class", "text-center")
      .text(coinMarketCapData["data"][coinID]["quotes"]["USD"]["price"]);
    let marketCapCell = $("<td>")
      .attr("class", "text-center")
      .text(coinMarketCapData["data"][coinID]["quotes"]["USD"]["market_cap"]);
    let percentageChange1hCell = $("<td>")
      .attr("class", "text-center")
      .text(coinMarketCapData["data"][coinID]["quotes"]["USD"]["percent_change_1h"]);
    let percentageChange24hCell = $("<td>")
      .attr("class", "text-center")
      .text(coinMarketCapData["data"][coinID]["quotes"]["USD"]["percent_change_24h"]);
    let percentageChange7dCell = $("<td>")
      .attr("class", "text-center")
      .text(coinMarketCapData["data"][coinID]["quotes"]["USD"]["percent_change_7d"]);
    let lastUpdatedCell = $("<td>")
      .attr("class", "text-center")
      .text(moment(coinMarketCapData["data"][coinID]["last_updated"] * 1000));

    tableRowElement.append(nameCell)
      .append(symbolCell)
      .append(rankCell)
      .append(priceCell)
      .append(marketCapCell)
      .append(percentageChange1hCell)
      .append(percentageChange24hCell)
      .append(percentageChange7dCell)
      .append(lastUpdatedCell);
    $("#current-stats-div").append(tableRowElement);

  }

}


// FireBase Observer for User Journal
function startPortfolioObserver() {
  console.log("startPortfolioObserver() has been called."); // Remove this line for the final product
  personalTransactionsRef.child(currentUserUID).on("value", function (snapshot) {
    journalSnapshot = snapshot.val();
    $("#my-transactions-div").empty();

    for (var key in journalSnapshot) {

      var tableRowElement = $("<tr>");
      var recordIdCell = $("<td>")
        .attr("class", "text-center")
        .text(key);
      var cryptoCurrencyCell = $("<td>")
        .attr("class", "text-center")
        .text(journalSnapshot[key]["cryptocurrency"]);
      var unitPriceCell = $("<td>")
        .attr("class", "text-center")
        .text(journalSnapshot[key]["cryptocurrencyprice"]);
      var quantityCell = $("<td>")
        .attr("class", "text-center")
        .text(journalSnapshot[key]["quantity"]);
      var totalPriceCell = $("<td>")
        .attr("class", "text-center")
        .text(journalSnapshot[key]["totalprice"]);
      var transactionTimeCell = $("<td>")
        .attr("class", "text-center")
        .text(journalSnapshot[key]["cryptocurrency"]);
      var closeButtonSCE = $("<td>")
        .attr("class", "text-center")
        .text("x");
      tableRowElement.append(recordIdCell)
        .append(cryptoCurrencyCell)
        .append(cryptoCurrencyCell)
        .append(unitPriceCell)
        .append(quantityCell)
        .append(totalPriceCell)
        .append(transactionTimeCell)
        .append(closeButtonSCE);
      $("#my-transactions-div").append(tableRowElement);

    }

    $("#my-transactions-div").append(`Updated: ${Date()}`);

    calculatePortfolioSummary();

  }, function (errorObject) { // Error handling
    console.log("Errors handled: " + errorObject.code);
  });
}


function calculatePortfolioSummary() {
  console.log("calculatePortfolioSummary() has been called."); // Remove this line for the final product
  investmentCurrentMarketValue = 0;
  investmentTotal = 0;
  coinCounts = {};

  // Calculate investment total
  for (var key in journalSnapshot) {
    investmentTotal += parseFloat(journalSnapshot[key]["totalprice"]);
    if ((coinCounts[journalSnapshot[key]["cryptocurrency"]] === undefined) || (coinCounts[journalSnapshot[key]["cryptocurrency"]] === NaN)) {
      coinCounts[journalSnapshot[key]["cryptocurrency"]] = 0;
    }
    coinCounts[journalSnapshot[key]["cryptocurrency"]] += parseFloat(journalSnapshot[key]["quantity"]);
  }


  for (var key in coinCounts) {
    investmentCurrentMarketValue += coinCounts[key] * getCurrentPrice(key);
  }

  $("#portfolio-summary-div").empty();
  $("#portfolio-summary-div").append(`Total investment: ${investmentTotal} <br/>`);
  $("#portfolio-summary-div").append(JSON.stringify(coinCounts) + "<br/>");
  $("#portfolio-summary-div").append(`Current investment market value: ${investmentCurrentMarketValue} <br/>`);
  $("#portfolio-summary-div").append(`Updated: ${Date()}`);

}


// Assign listener for "Login" button
$("#login-button").on("click", function (event) {
  // Don't refresh the page!
  event.preventDefault();

  var username = $("#username-input").val();
  var password = $("#password-input").val();
  firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(`errorCode: ${errorCode}; errorMessage: ${errorMessage}`);
  });
});


// Assign listener for "Record Transaction" button
$("#record-transaction-button").on("click", function (event) {
  // Don't refresh the page!
  event.preventDefault();

  // Get value(s) from form;
  var transactionDateTimeInput = $("#transaction-date-time-input").val();
  var cryptoCurrencyInput = $("#crypto-currency-input").val();
  var cryptoCurrencyPriceInput = $("#crypto-currency-price-input").val();
  var cryptoCurrencyQtyInput = $("#crypto-currency-qty-input").val();

  // Save to database
  personalTransactionsRef.child(currentUserUID).push({
    "transactiondatetime": String(new Date(transactionDateTimeInput)),
    "cryptocurrency": cryptoCurrencyInput.toString(),
    "cryptocurrencyprice": parseFloat(cryptoCurrencyPriceInput),
    "quantity": parseFloat(cryptoCurrencyQtyInput),
    "totalprice": (parseFloat(cryptoCurrencyPriceInput) * parseFloat(cryptoCurrencyQtyInput))
  });

  alert("New transaction recorded.");

});


// Assign listener for "Remove Record" button
$("#remove-record").on("click", function (event) {
  // Don't refresh the page!
  event.preventDefault();

  // Get value(s) from form;
  var recordID = $("#record-id").val();

  personalTransactionsRef.child(currentUserUID).child(recordID).remove();
  swal(`Record #${recordID} has been removed from journal.`);
  $("#record-id").val("");

});


// Assign Date/Time Picker to Arrival field
$("#transaction-date-time-input").datetimepicker({
  theme: "default",
  allowTimes: [
    "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"
  ]
});


// Enter username and password automatically. Remove for the final product.
$("#username-input").val("bob@company.com");
$("#password-input").val("password");


// Procedure for processing authentication states
firebase.auth().onAuthStateChanged(function (user) {
  if (user) { // When a user is signed in...

    // Set global variables for session
    currentUserUID = user.uid.toString();
    currentUserEmail = user.email.toString();

    // Start FireBase components
    checkCurrentCoinData();
    renderUserInfo();
    startPortfolioObserver();

  } else { // When a user is signed out

    // Stop timer
    clearTimeout(timer);
    timer = null;
    console.log(`Timer stopped; timer = ${timer}`); // Remove this line for the final product

    // Set global variables to null
    currentUserUID = null;
    currentUserEmail = null;
    console.log(`currentUserUID = ${currentUserUID}; currentUserEmail = ${currentUserEmail}`); // Remove this line for the final product

    // Clear data on screen
    $("#current-user-info").empty();
    $("#marketplace-div").empty();

  }
});










