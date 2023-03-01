import { loadWeather } from "./sripts/weatherData.js";
import { loadDom } from "./sripts/domManipulation.js";
import { clearSearchBox } from "./sripts/clearSearch.js";

export const searchBox = document.querySelector(".fsearch");

const weatherObject = await loadWeather("Skopje");
loadDom(weatherObject);
clearSearchBox();


searchBox.addEventListener("keydown", async function(event) {
    if(event.key === 'Enter') {
        const weatherObject = await loadWeather(searchBox.value);
        loadDom(weatherObject);     
    }  
});


console.log("hi");
