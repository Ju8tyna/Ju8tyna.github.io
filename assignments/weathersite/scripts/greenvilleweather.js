// API call: http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=a592e64beaf40a9f87a65932af9abf48
// CITY ID for Franklin: 4156210

//need: current temp, current weather description, wind speed, current weather icon

//connection to API
let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4580543&units=imperial&APPID=a592e64beaf40a9f87a65932af9abf48";
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
      let weatherData = JSON.parse(weatherRequest.responseText);
      console.log(weatherData);
    
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
    
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage').src = imagesrc;
    
    document.getElementById("weather-description").innerHTML = weatherData.weather[0].description;
    
    document.getElementById("wind-speed").innerHTML = weatherData.wind.speed;
    
    document.getElementById("high-temp").innerHTML = weatherData.main.temp_max;
    
    document.getElementById("low-temp").innerHTML = weatherData.main.temp_min;
}