import { loadWeather } from "./sripts/weatherData.js";
import { loadDom } from "./sripts/domManipulation.js";
import { clearSearchBox } from "./sripts/clearSearch.js";
import { checkDay } from "./sripts/checkDay.js";
import { imperialCheck } from "./sripts/imperialCheck.js";
import { checkBox } from "./sripts/imperialCheck.js";

export const searchBox = document.querySelector(".fsearch");


const weatherObject = await loadWeather("Skopje");
imperialCheck();
loadDom(weatherObject, imperialCheck());
clearSearchBox();
checkDay(weatherObject.isDay);

checkBox.addEventListener("click", async function(){
    const weatherObject = await loadWeather("Skopje");
    imperialCheck();
    loadDom(weatherObject, imperialCheck());
    clearSearchBox();
    checkDay(weatherObject.isDay);
});

searchBox.addEventListener("keydown", async function(event) {
    if(event.key === 'Enter') {
        const weatherObject = await loadWeather(searchBox.value);
        loadDom(weatherObject, imperialCheck());
        checkDay(weatherObject.isDay);     
    }
});


console.log("hi");
