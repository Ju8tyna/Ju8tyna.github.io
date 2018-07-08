//*****my arrays and classes*****

/*var cityimagearray = [
    "images/gallery-opt-agriculture-clouds.jpg",
    "images/gallery-opt-adventure-aerial.jpg",
    "images/gallery-opt-blue-sky.jpg"
    ];
var cityimagealtarray = [
    "Rainbow over a field in Franklin",
    "Ariel view of Greenville",
    "Blue skies in Springfield"
    ];
var citypagelinkarray = [
    "franklin.html",
    "greenville.html",
    "springfield.html"
    ];
var classselector = "main-city";*/

//*****assign to html*****

var section = document.querySelector('section');

//*****request json*****

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();

//*****assign json to var and run functions*****

request.onload = function () {
  var townweatherinfo = request.response;
  populateCities(townweatherinfo);
}

function populateCities(jsonObj) {
    var mytowns = jsonObj["towns"];

for (var i = 0; i < towns.length; i++) {
  // create elements as variables
    var townStats = document.createElement('article');
    var townName = document.createElement("h2");
    var motto = document.createElement("p");
    var yrfounded = document.createElement("p");
    var population = document.createElement("p");
    var yrRain = document.createElement("p");
    
  //  except for towns.length[2]; 
    
  //find info in json array
    townName.textContent = mytowns[i].name;
    motto.textContent = mytowns[i].motto;
    yrfounded.textContent = "Year Founded: " + mytowns[i].yearFounded;
    population.textContent = "Population: " + mytowns[i].currentPopulation;
    yrRain.textContent = "Average Rainfall " + mytowns[i].averageRainfall;
  //append html body and section
    townStats.appendChild(townName);
    townStats.appendChild(motto);
    townStats.appendChild(yrfounded);
    townStats.appendChild(population);
    townStats.appendChild(yrRain);
    
    section.appendChild(townStats);
}
}
