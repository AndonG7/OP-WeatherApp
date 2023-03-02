const mainIcon = document.querySelector(".icon");
const currTemp = document.querySelector(".current-temp");
const city = document.querySelector(".city");
const currLowHigh = document.querySelector(".lo-hi");
const feelLike = document.querySelector(".feel");
const humidity = document.querySelector(".hum");
const precipitation = document.querySelector(".prec");
const todayIcon = document.querySelector(".today-icon");
const todayHiLo = document.querySelector(".hiLo1");
const tomorrowIcon = document.querySelector(".tomorrow-icon");
const tomorrowHiLo = document.querySelector(".hiLo2");
const day3Icon = document.querySelector(".day3-icon");
const day3HiLo = document.querySelector(".hiLo3");
const day4Icon = document.querySelector(".day4-icon");
const day4HiLo = document.querySelector(".hiLo4");
const day3Name = document.querySelector(".day3");
const day4Name = document.querySelector(".day4");



export async function loadDom (_weatherObject, _imperial) {
    const tempValue = _imperial ? 'F' : 'C';
    const precValue = _imperial ? 'in' : 'mm';

    //---------Displaying the data in the DOM---------//

    //Current Stats
    mainIcon.src = _weatherObject.currIconSrc;
    currTemp.innerHTML = _weatherObject.currTemp + tempValue;
    city.innerHTML = _weatherObject.city + ", " + _weatherObject.country;
    currLowHigh.innerHTML = _weatherObject.currMax + " / " + _weatherObject.currMin; 
    feelLike.innerHTML = _weatherObject.feel;
    humidity.innerHTML = _weatherObject.humidity + " %";
    precipitation.innerHTML = _weatherObject.precipitation + " "+  precValue;

    //Today stats
    todayIcon.src = _weatherObject.todayIconSrc;
    todayHiLo.innerHTML = _weatherObject.todayMax + " / " + _weatherObject.todayMin;

    //Tomorrow stats
    tomorrowIcon.src = _weatherObject.tomorrowIconSrc;
    tomorrowHiLo.innerHTML = _weatherObject.tomorrowMax + " / " + _weatherObject.tomorrowMin;

    //Day3 stats
    day3Icon.src = _weatherObject.day3IconSrc;
    day3HiLo.innerHTML = _weatherObject.day3Max + " / " + _weatherObject.day3Min;

    //Day4 stats
    day4Icon.src = _weatherObject.day4IconSrc;
    day4HiLo.innerHTML = _weatherObject.day4Max + " / " + _weatherObject.day4Min;

    //Day3 and Day4 names
    day3Name.innerHTML = _weatherObject.day3Name;
    day4Name.innerHTML = _weatherObject.day4Name;
}