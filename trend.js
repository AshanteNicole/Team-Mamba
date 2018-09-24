function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
   }
   
   var json_obj = JSON.parse(Get("https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v2/ticker/?limit=10"));
   
   console.log(json_obj);
   console.log("works")