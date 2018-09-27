function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

//var json_obj = JSON.parse(Get("https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/v2/ticker/?limit=10"));

//console.log(json_obj);
//console.log("works");

//baseUrl = "https://widgets.cryptocompare.com/";
//var scripts = document.getElementsByTagName("#compare-chart");
//var embedder = scripts[scripts.length - 1];
//(function () {
    //var appName = encodeURIComponent(window.location.hostname);
    //if (appName == "") { appName = "local"; }
    //var s = document.createElement("script");
    //s.type = "text/javascript";
    //s.async = true;
    //var theUrl = baseUrl + 'serve/v1/coin/multi?fsyms=BTC,ETH,XMR,LTC,DASH&tsyms=USD,EUR,CNY,GBP';
    //s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
    //embedder.parentNode.appendChild(s);
//})();


