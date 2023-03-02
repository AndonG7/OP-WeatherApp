export const checkBox = document.querySelector(".checkbox");

export function imperialCheck () {
        if (checkBox.checked) {
            return true;
        }
        if (!checkBox.checked) {
            return false;
        }
}