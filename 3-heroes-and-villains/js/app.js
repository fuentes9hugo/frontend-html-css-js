/*
 * JS for checking the entry form data 
 *
 * @author Hugo Fuentes <fuentes9hugo@gmail.com>
 * @link https://github.com/fuentes9hugo/frontend-html-css-js/tree/master/3-heroes-and-villains GitHub
 */

// Initialization of var, objects, DOM
var nickInput;
var difficultyInput;
var cardsNumInput;
var entryForm;
var error;
var avatarItems;
var avatar;

// Event functions

/**
 * Check entry form correct data
 *
 * @param {*} event 
 * @returns {boolean} 
 */
function checkForm(event) {
    // Check changes

    return false
}


function checkForm(event) {
    // Check changes
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        nickInput.focus();
        event.preventDefault();
        error.innerText = "El campo de nick no puede comenzar con un número";
        return false;
    }

    // TODO: send correct information to userData.js
    return true
}


/** DOM Objects charge, checks and form events */
function chargedDom() {
    // All Elements capture
    nickInput = document.getElementById("nick");
    difficultyInput = document.getElementById("difficulty");
    cardsNumInput = document.getElementById("cards-num");
    entryForm = document.getElementById("entry-form");
    error = document.getElementById("error");

    // Check any juego.html error
    if(sessionStorage.getItem("error")) {
        error.innerText = sessionStorage.getItem("error");
        sessionStorage.removeItem("error");
    }

    entryForm.addEventListener("submit", checkForm);

    // TODO: Drag & Drop events
}

// Events charge start
document.addEventListener("DOMContentLoaded", chargedDom);