var cityimage=[
    
]

let townInfoRequest = new XMLHttpRequest();
let apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
townInfoRequest.open('GET', apiURL, true);
townInfoRequest.send();

townInfoRequest.onload = function() {
      let townData = JSON.parse(townInfoRequest.responseText);
      console.log(townData);
    
    //Franklin
    
    document.getElementById("townName0").innerHTML = townData.towns[0].name;
    
    document.getElementById("townMotto").innerHTML = townData.towns[0].motto;
    
    document.getElementById("yrFounded").innerHTML = townData.towns[0].currentPopulation;
    
    document.getElementById("yrRain").innerHTML = townData.towns[0].averageRainfall;
    
    //Greenville
    
    document.getElementById("townName").innerHTML = townData.towns[1].name;
    
    document.getElementById("townMotto").innerHTML = townData.towns[1].motto;
    
    document.getElementById("yrFounded").innerHTML = townData.towns[1].currentPopulation;
    
    document.getElementById("yrRain").innerHTML = townData.towns[1].averageRainfall;
    
    //Springfield
    
    document.getElementById("townName").innerHTML = townData.towns[3].name;
    
    document.getElementById("townMotto").innerHTML = townData.towns[3].motto;
    
    document.getElementById("yrFounded").innerHTML = townData.towns[3].currentPopulation;
    
    document.getElementById("yrRain").innerHTML = townData.towns[3].averageRainfall;