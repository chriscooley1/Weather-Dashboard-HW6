const apiKey = "&appid=94dc837cac6009ee9dec8622a9fe75ff";
let date = new Date();
var pastSearch = localStorage.getItem("Past Cities");

makeHistory();
function makeHistory(){
    pastSearch = JSON.parse(pastSearch) || [];

    for (i = 0; i < pastSearch.length; i++){
        var PC = document.createElement("ul")
        PC.innerHTML = pastSearch[i];
        console,log(PC);
        document.getElementById("searchHistory").appendChild(PC);
    }
        $("ul").addClass("list-group list-group-flush list");
}

    city = pastSearch[pastSearch.length-1]
    getWeather(city);

    $('#searchHistory').on('click', 'ul', function(){
        var city = $(this).text();
        getWeather(city);
    });

function getWeather(city){
    const firstqueryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
    $.ajax({
        url: firstqueryUrl,
        method: "GET",
        statusCode: {
            404: function(){
                $('#currentCity').hide();
                $('#5dayForecast').hide();
                $('#error404').show();
                $('#forecastTitle').hide();
                pastSearch.pop();
                localStorage.setItem("Past Cities", JSON.stringify(pastSearch));
                location.reload();
            }
        }
    })
    
}