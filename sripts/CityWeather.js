//Class for general weather info about a City
export class CityWeather {
    constructor (city) {
        this.city = city;
        this.country = "";
        this.currTemp = "C";
        this.description = "";
    }
}