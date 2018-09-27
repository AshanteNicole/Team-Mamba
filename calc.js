$(document).ready(function () {
    $('#include-navbar').load('shared_components.html');
  });


$("#submitHashrate").on("click", function (event) {
    var hashrate = $('#hashrate').val();
    event.preventDefault();
    var hashrateSelector = $("#hashrate-selector").val();

            if (hashrateSelector == 'mhs') {
                hashrate = hashrate / 1000;
            } else if (hashrateSelector == 'ths') {
                hashrate = hashrate * 1000;
            } else {
                hashrate = hashrate;
            }
            console.log(hashrate);

    var queryURL = "https://alloscomp.com/bitcoin/calculator/json?hashrate=" + hashrate;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#difficulty").html(response.difficulty);

        $("#exchange_rate").html('$ ' + response.exchange_rate);

        $("#bc_per_block").html(response.bc_per_block);

        $("#btc_day").html('₿ ' + (response.coins_per_hour * 24 * 1000000000).toFixed(6));

        $("#btc_week").html('₿ ' + (response.coins_per_hour * 24 * 7 * 1000000000).toFixed(6));

        $("#btc_month").html('₿ ' + (response.coins_per_hour * 24 * 7 * 4 * 1000000000).toFixed(6));

        $("#dol_day").html('$ ' + (response.dollars_per_hour * 24 * 1000000000).toFixed(2));

        $("#dol_week").html('$ ' + (response.dollars_per_hour * 24 * 7 * 1000000000).toFixed(2));

        $("#dol_month").html('$ ' + (response.dollars_per_hour * 24 * 7 * 4 * 1000000000).toFixed(2));

    });

});