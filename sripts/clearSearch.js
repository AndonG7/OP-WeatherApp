import { searchBox } from "../main.js";

export function clearSearchBox () {
    searchBox.addEventListener("click", function() {
        searchBox.value = "";
        searchBox.style.color = "black";      
    });

    searchBox.addEventListener("keypress", function() {
        searchBox.style.color = "black";      
    });
}