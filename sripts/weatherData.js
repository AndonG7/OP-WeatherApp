import { CityWeather } from "./CityWeather.js";

export function loadWeather() {
    window.addEventListener("click", async function () {
        console.log("click");

        //Creating instance of class CityWeather
        const cw1 = new CityWeather();

        //Calling API
        const _city = "Sydney";
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=fb045db9b33948df818113311232502&q=${_city}&days=7&aqi=no&alerts=no`,
            {mode: 'cors'}
        );
        const weatherData = await response.json();
        
        //Inputing data in the class
        cw1.city = weatherData.location.name;
        cw1.country = weatherData.location.country;
        cw1.currTemp = weatherData.current.temp_c;
        cw1.description = weatherData.current.condition.text;

        console.log(weatherData);
        console.log("The temperature in " + cw1.city + ", " + cw1.country + " is " + cw1.currTemp + " C" + " and it's condition is: " + cw1.description);

    });
}