import { CityWeather } from "./CityWeather.js";
import { getDay } from "./getDay.js";
import { imperialCheck } from "./imperialCheck.js";

const searchBox = document.querySelector('.fsearch');

export async function loadWeather(_city) {


        //Creating instance of class CityWeather
        const cw1 = new CityWeather();

        //Calling API
        try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=fb045db9b33948df818113311232502&q=${_city}&days=7&aqi=no&alerts=no`,
            {mode: 'cors'}
            );
        const weatherData = await response.json();
        console.log(weatherData);
        
        // const measurement = eval("temp_"+ imperialCheck());

                
        //---------Inputing data in the class---------//

        const imperial = imperialCheck();

        //Current
        cw1.city = weatherData.location.name;
        cw1.country = weatherData.location.country;
        cw1.description = weatherData.current.condition.text;
        cw1.currIconSrc = weatherData.current.condition.icon;
        cw1.humidity = Math.trunc(weatherData.current.humidity);
        cw1.isDay = weatherData.current.is_day;

        if (!imperial) {
            cw1.currMax = Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_c);
            cw1.currMin = Math.trunc(weatherData.forecast.forecastday[0].day.mintemp_c);
            cw1.feel = Math.trunc(weatherData.current.feelslike_c);
            cw1.currTemp = Math.trunc(weatherData.current.temp_c);
            cw1.precipitation = Math.trunc(weatherData.current.precip_mm);

            cw1.todayMax = Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_c);
            cw1.todayMin = Math.trunc(weatherData.forecast.forecastday[0].day.mintemp_c);

            cw1.tomorrowMax = Math.trunc(weatherData.forecast.forecastday[1].day.maxtemp_c);
            cw1.tomorrowMin = Math.trunc(weatherData.forecast.forecastday[1].day.mintemp_c);

            cw1.day3Max = Math.trunc(weatherData.forecast.forecastday[2].day.maxtemp_c);
            cw1.day3Min = Math.trunc(weatherData.forecast.forecastday[2].day.mintemp_c);

            cw1.day4Max = Math.trunc(weatherData.forecast.forecastday[3].day.maxtemp_c);
            cw1.day4Min = Math.trunc(weatherData.forecast.forecastday[3].day.mintemp_c);
        }

        if (imperial) {
            cw1.currMax = Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_f);
            cw1.currMin = Math.trunc(weatherData.forecast.forecastday[0].day.mintemp_f);
            cw1.feel = Math.trunc(weatherData.current.feelslike_f);
            cw1.currTemp = Math.trunc(weatherData.current.temp_f);
            cw1.precipitation = Math.trunc(weatherData.current.precip_in);

            cw1.todayMax = Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_f);
            cw1.todayMin = Math.trunc(weatherData.forecast.forecastday[0].day.mintemp_f);

            cw1.tomorrowMax = Math.trunc(weatherData.forecast.forecastday[1].day.maxtemp_f);
            cw1.tomorrowMin = Math.trunc(weatherData.forecast.forecastday[1].day.mintemp_f);

            cw1.day3Max = Math.trunc(weatherData.forecast.forecastday[2].day.maxtemp_f);
            cw1.day3Min = Math.trunc(weatherData.forecast.forecastday[2].day.mintemp_f);

            cw1.day4Max = Math.trunc(weatherData.forecast.forecastday[3].day.maxtemp_f);
            cw1.day4Min = Math.trunc(weatherData.forecast.forecastday[3].day.mintemp_f);
        }

        //Today
        cw1.todayIconSrc = weatherData.forecast.forecastday[0].day.condition.icon;
        
        //Tomorrow
        cw1.tomorrowIconSrc = weatherData.forecast.forecastday[1].day.condition.icon;
        
        //Day 3
        cw1.day3IconSrc = weatherData.forecast.forecastday[2].day.condition.icon;
        
        //Day 4
        cw1.day4IconSrc = weatherData.forecast.forecastday[3].day.condition.icon;

        //Day3 and Day4 Names
        cw1.day3Name = getDay(weatherData.forecast.forecastday[2].date);
        cw1.day4Name = getDay(weatherData.forecast.forecastday[3].date);

    } catch (error) {
        // TypeError: Failed to fetch
        searchBox.value = "Wrong Input or no Internet Connection";
        searchBox.style.color = "red";
    }

        return cw1;
}