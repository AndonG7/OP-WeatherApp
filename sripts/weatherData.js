import { CityWeather } from "./CityWeather.js";
import { getDay } from "./getDay.js";

export async function loadWeather(_city) {
        console.log("click");

        //Creating instance of class CityWeather
        const cw1 = new CityWeather();

        //Calling API
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=fb045db9b33948df818113311232502&q=${_city}&days=7&aqi=no&alerts=no`,
            {mode: 'cors'}
        );
        const weatherData = await response.json();
        
        //---------Inputing data in the class---------//


        //Current
        cw1.city = weatherData.location.name;
        cw1.country = weatherData.location.country;
        cw1.currTemp = Math.trunc(weatherData.current.temp_c);
        cw1.description = weatherData.current.condition.text;
        cw1.currMax = Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_c);
        cw1.currMin = Math.trunc(weatherData.forecast.forecastday[0].day.mintemp_c);
        cw1.currIconSrc = weatherData.current.condition.icon;
        cw1.feel = Math.trunc(weatherData.current.feelslike_c);
        cw1.humidity = Math.trunc(weatherData.current.humidity);
        cw1.precipitation = Math.trunc(weatherData.current.precip_mm);
        cw1.isDay = weatherData.current.is_day;

        //Today
        cw1.todayMax = Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_c);
        cw1.todayMin = Math.trunc(weatherData.forecast.forecastday[0].day.mintemp_c);
        cw1.todayIconSrc = weatherData.forecast.forecastday[0].day.condition.icon;
        
        //Tomorrow
        cw1.tomorrowMax = Math.trunc(weatherData.forecast.forecastday[1].day.maxtemp_c);
        cw1.tomorrowMin = Math.trunc(weatherData.forecast.forecastday[1].day.mintemp_c);
        cw1.tomorrowIconSrc = weatherData.forecast.forecastday[1].day.condition.icon;
        
        //Day 3
        cw1.day3Max = Math.trunc(weatherData.forecast.forecastday[2].day.maxtemp_c);
        cw1.day3Min = Math.trunc(weatherData.forecast.forecastday[2].day.mintemp_c);
        cw1.day3IconSrc = weatherData.forecast.forecastday[2].day.condition.icon;
        
        //Day 4
        cw1.day4Max = Math.trunc(weatherData.forecast.forecastday[3].day.maxtemp_c);
        cw1.day4Min = Math.trunc(weatherData.forecast.forecastday[3].day.mintemp_c);
        cw1.day4IconSrc = weatherData.forecast.forecastday[3].day.condition.icon;

        //Day3 and Day4 Names
        cw1.day3Name = getDay(weatherData.forecast.forecastday[2].date);
        cw1.day4Name = getDay(weatherData.forecast.forecastday[3].date);

        console.log(weatherData);
        console.log(cw1.todayIconSrc);
        // console.log("The temperature in " + cw1.city + ", " + cw1.country + " is " + cw1.currTemp + " C" + " and it's condition is: " + cw1.description);

        return cw1;
}