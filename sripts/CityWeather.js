async function getWeatherData(_city) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=fb045db9b33948df818113311232502&q=${_city}&days=7&aqi=no&alerts=no`,
         {mode: 'cors'}
         );
    const weatherData = await response.json();
    return weatherData.location.name;
}

//Class for extracting general info about the weather in requested city
export class CityWeather {
    constructor (city) {
        this.city = city;
        // this.weather = getWeatherData("Skopje");
        // this.country = getWeatherData(city).location.country;
        // this.currentTemp = getWeatherData(city).current.temp_c;
    }

    async getCurrTemp() {
        const temp = await getWeatherData(this.city);
        alert("NAME: " + temp);
        return temp;
    }
}