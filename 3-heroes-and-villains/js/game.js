/*
 * JS for Heroes & Villains game
 *
 * @author Hugo Fuentes <fuentes9hugo@gmail.com>
 * @link https://github.com/fuentes9hugo/frontend-html-css-js/tree/master/3-heroes-and-villains GitHub
 */


import { getUserData } from "./userData.js";



// Recieve user's data
const { nick, difficulty, cardsNum, avatar } = getUserData();

// Redirect to entry form if there is no nick name
// if (nick == null) {
    //     sessionStorage.setItem("error", "Form not filled out correctly");
    //     location = "index.html";
// }

// Fill nick and avatar image and setting grid size
document.getElementById("nick").value = nick;
document.getElementById("avatar-img").src = avatar;
document.getElementById("difficulty").value = difficulty;
const gridSize = parseInt(cardsNum);
if (gridSize == 2){ document.getElementById("cards-num").value = "four" };

drawGrid();

// Returns random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/** Draw game's grid and sets cards */
function drawGrid() {
    document.getElementById("juego").style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
    document.getElementById("juego").style.gridTemplateRows = "repeat(" + gridSize + ", 1fr)";
    
    // Random cards
    let items = [];
    
    // All heroes and villiains cards
    let cards = ["broly", "cell", "freezer", "gohan", "goku", "majin-boo", "piccolo", "vegeta"];

    // Choose random cards and their positions
    let randomCard;
    for (let index = 0; index < (gridSize**2) / 2; index++) {
        randomCard = cards.splice(getRandomInt(cards.length), 1);
        items.push(`<div class="container-item"><img class="`+ randomCard +`" src="./img/cards/card.png"></div>`);
        items.push(`<div class="container-item"><img class="`+ randomCard +`" src="./img/cards/card.png"></div>`);
    }

    let finalItems = []
    do {
        finalItems.push(items.splice(getRandomInt(items.length), 1));
    
    } while(items.length > 0);
    
    document.getElementById("juego").innerHTML = finalItems.join("");
}