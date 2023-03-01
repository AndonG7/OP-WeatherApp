import { CityWeather } from "./sripts/CityWeather.js";
import { loadWeather } from "./sripts/weatherData.js";


loadWeather();
console.log("hi");

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = '02/28/2023';
var day = getDayName(dateStr, "en-GB"); // Gives back 'Vrijdag' which is Dutch for Friday.

console.log(day);