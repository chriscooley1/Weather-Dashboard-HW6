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

    