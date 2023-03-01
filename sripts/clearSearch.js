import { searchBox } from "../main.js";

export function clearSearchBox () {
    searchBox.addEventListener("click", function() {
        searchBox.value = "";      
    });
}