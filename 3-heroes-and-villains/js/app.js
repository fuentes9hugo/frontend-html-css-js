/*
 * JS for checking the entry form data 
 *
 * @author Hugo Fuentes <fuentes9hugo@gmail.com>
 * @link https://github.com/fuentes9hugo/frontend-html-css-js/tree/master/3-heroes-and-villains GitHub
 */


// Imported functions
import { userData, userHistory } from "./userData.js";


// Elements capture
const nickInput = document.getElementById("nick");
const difficultyInput = document.getElementById("difficulty");
const cardsNumInput = document.getElementById("cards-num");
const entryForm = document.getElementById("entry-form");
const error = document.getElementById("error");
const avatarItems = document.getElementsByClassName("avatar-img-item");
let itemImg;
let avatar = document.getElementById("avatar-img");


// Check any game.html error
if(sessionStorage.getItem("error")) {
    error.innerText = sessionStorage.getItem("error");
    sessionStorage.removeItem("error");
}

entryForm.addEventListener("submit", checkForm);

// Drag & Drop events
for (let item of avatarItems) {
    item.addEventListener("dragstart", e => { itemImg = e.target; });
}

avatar.addEventListener("dragover", e => { e.preventDefault(); });
avatar.addEventListener("drop", () => { avatar.src = itemImg.src; });


// Event functions

/**
 * Check entry form correct data
 *
 * @param {*} event
 * @returns {boolean}
 */
function checkForm(event) {
    // Check changes
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        nickInput.focus();
        event.preventDefault();
        error.innerText = "El campo de nick no puede comenzar con un número";
        return false;
    }

    // Send correct information
    userData(nickInput, difficultyInput, cardsNumInput, avatar);
    userHistory(nickInput);

    return true
}