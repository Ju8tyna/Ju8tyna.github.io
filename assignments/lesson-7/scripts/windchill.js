var high = 90;
var low = 66;
var wspeed = 5;

var av = (high + low) / 2;

var chill = 35.74 + 0.6215 * av - 35.75 * (Math.pow(wspeed, 0.16)) + 0.4275 * t * (Math.pow(wspeed, 0.16));

document.getElementById("windchill").innerHTML = chill + "&deg;";