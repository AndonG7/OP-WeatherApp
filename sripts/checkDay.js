const background = document.querySelector(".card");

export function checkDay(_isDay) {
    if (_isDay === 0) {
        background.style.backgroundImage = `url("./images/night.jpg")`;
        console.log("nokj");
    } 

    if (_isDay === 1 ) {
        background.style.backgroundImage = `url("./images/day.jpg")`;
        console.log("den");
    }
}