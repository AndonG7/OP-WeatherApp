import { loadWeather } from "./sripts/weatherData.js";
import { loadDom } from "./sripts/domManipulation.js";
import { clearSearchBox } from "./sripts/clearSearch.js";
import { checkDay } from "./sripts/checkDay.js";

export const searchBox = document.querySelector(".fsearch");

const weatherObject = await loadWeather("Skopje");
loadDom(weatherObject);
clearSearchBox();
checkDay(weatherObject.isDay);

searchBox.addEventListener("keydown", async function(event) {
    if(event.key === 'Enter') {
        const weatherObject = await loadWeather(searchBox.value);
        loadDom(weatherObject);
        checkDay(weatherObject.isDay);     
    }
});


console.log("hi");
