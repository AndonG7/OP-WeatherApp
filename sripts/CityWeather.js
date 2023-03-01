//Class for general weather info about a City
export class CityWeather {
    constructor (city) {
        this.city = city;
        this.country = "";

        //Current stats
        this.currTemp = "C";
        this.description = "";
        this.currMax = 0;
        this.currMin = 0;
        this.currIconSrc = "";
        this.feel = 0;
        this.humidity = 0;
        this.precipitation = 0;
        this.isDay = 1;

        //------Forecast stats------//

        //Today
        this.todayMax = 0;
        this.todayMin = 0;
        this.todayIconSrc = "";
        
        //Tomorrow
        this.tomorrowMax = 0;
        this.tomorrowMin = 0;
        this.tomorrowIconSrc = "";
        
        //Day 3
        this.day3Max = 0;
        this.day3Min = 0;
        this.day3IconSrc = "";
        
        //Day 4
        this.day4Max = 0;
        this.day4Min = 0;
        this.day4IconSrc = "";

        //------------------------------//

        //Day3 and Day4 Names
        this.day3Name = "";
        this.day4Name = "";
        
    }
}