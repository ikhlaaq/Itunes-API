
//Itunes API
var processData = function (data) {
    console.log(data);
    $("#output").empty();
    for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].artworkUrl100) {
            var $div = $("<div></div>");
            var $img = $("<img src='" + data.results[i].artworkUrl600 + "' />");
            var $link = $("<a href='" + data.results[i].trackViewUrl + "' target='_blank'></a>");
            $link.html($img);
            $("#output").append($div);
            $div.append(data.results[i].trackName)
                .append("<br>")
                .append($link)
                .append("<br>");
        }
    }
};
var submit = function () {
    var term = $("#term").val();
    $.getScript("https://itunes.apple.com/search?term=" + term + "&entity=podcast&callback=processData");
};

$("#submit").click(submit);
submit();


