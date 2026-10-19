/*
 * JS for Heroes & Villains game
 *
 * @author Hugo Fuentes <fuentes9hugo@gmail.com>
 * @link https://github.com/fuentes9hugo/frontend-html-css-js/tree/master/3-heroes-and-villains GitHub
 */


import { getUserData, checkUserData } from "./userData.js";


// Game variables
let selectedCards = [];
let isLocked = false;
const score = document.getElementById("score");
// Recieve user's data
const { nick, difficulty, cardsNum, avatar } = getUserData();

// Redirect to entry form if user's data isn't correct
if (!checkUserData()) location = "index.html";

// Fill nick and avatar image and setting grid size
document.getElementById("nick").value = nick;
document.getElementById("avatar-img").src = avatar;

// Fill difficulty label
if (difficulty == "2"){
    document.getElementById("difficulty").value = "THREE QUARTERS";

} else if (difficulty == "3") {
    document.getElementById("difficulty").value = "ONE";
}

// Fill number of cards label
const gridSize = parseInt(cardsNum);
if (gridSize == 2) {
    document.getElementById("cards-num").value = "four";
} else if (gridSize == 3) {
    document.getElementById("cards-num").value = "eight";
}

// Set limit of plays
const limit = document.getElementById("limit");
if (difficulty == "3") {
    limit.value = parseInt(cardsNum)**2 * 2;
} else if (difficulty == "2" ) {
    limit.value = parseInt(parseInt(cardsNum)**2 * 1.85);
} else {
    limit.value = parseInt(parseInt(cardsNum)**2 * 1.75);
}

// Set 'another game' button
document.getElementById("nueva-partida").addEventListener("click", () => { location.reload(); });

drawGrid();
gameEvents();

// Returns random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/** Draw game's grid and sets cards */
function drawGrid() {
    // Adjust grid and num of cards if gridSize**2 not even
    let adapter = 0;
    if (gridSize % 2 != 0) adapter++; 

    document.getElementById("juego").style.gridTemplateColumns = "repeat(" + (gridSize + adapter) + ", 1fr)";
    document.getElementById("juego").style.gridTemplateRows = "repeat(" + (gridSize - adapter) + ", 1fr)";

    
    // Random cards
    let items = [];
    
    // All heroes and villiains cards
    let cards = ["broly", "cell", "freezer", "gohan", "goku", "majin-boo", "piccolo", "vegeta"];

    // Choose random cards and their positions
    let randomCard;
    for (let index = 0; index < ((gridSize**2) - adapter) / 2; index++) {
        randomCard = cards.splice(getRandomInt(cards.length), 1);
        items.push(`<div class="container-item"><img class="`+ randomCard +`" src="./img/cards/card.png"></div>`);
        items.push(`<div class="container-item"><img class="`+ randomCard +`" src="./img/cards/card.png"></div>`);
    }

    let finalItems = []
    do {
        finalItems.push(items.splice(getRandomInt(items.length), 1));
    
    } while (items.length > 0);
    
    document.getElementById("juego").innerHTML = finalItems.join("");
}


/** Add events to the game */
function gameEvents() {
    const cardContainers = document.getElementsByClassName("container-item");
    for (let container of cardContainers) {
        const card = container.firstChild;
        card.addEventListener("click", imgClick);
    }
}


/**
 * Auxiliar function to sleep the code exution X seconds
 *
 * @param {*} ms 
 * @returns {*} 
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Events when click a card
 *
 * @param {*} event 
 */
async function imgClick(event) {
    if (isLocked) { return; }
    
    const card = event.target;
    selectedCards.push(card);

    if (card.getAttribute("src") != "./img/cards/card.png" || card.parentElement.classList.contains("selected-card")) {
        selectedCards.pop();
        return;
    }

    if (selectedCards.length == 2) {
        if (card == selectedCards[0]) {
            selectedCards.pop();
            return;
        }

        if (card.classList[0] != selectedCards[0].classList[0]) {
            card.src = `./img/cards/` + card.className + `.png`;
            card.parentElement.className += " selected-card";
            limit.value--;
            if (limit.value <= 0) { document.getElementById("juego-acabado").style.zIndex = "1000"; }
            isLocked = true;
            await sleep(parseInt(difficulty) / 2 * 1000);
            isLocked = false;

            card.src = "./img/cards/card.png";
            card.parentElement.className = card.parentElement.classList[0];
            selectedCards[0].parentElement.className = selectedCards[0].parentElement.classList[0];
            selectedCards[0].src = "./img/cards/card.png";
            selectedCards = [];
            return;
        }

    }

    limit.value--;

    card.src = `./img/cards/` + card.className + `.png`;
    card.parentElement.className += " selected-card";

    if (limit.value <= 0) { document.getElementById("juego-acabado").style.zIndex = "1000"; }
    
    if (selectedCards.length == 2) {
        score.value = +score.value + 100;
        
        selectedCards = [];

        const cardContainers = document.getElementsByClassName("container-item");
        
        for (const container of cardContainers) {
            if (!container.classList.contains("selected-card")) return;   
        }
        
        // Bring the 'another game' button to the front
        document.getElementById("juego-acabado").style.zIndex = "1000";
    }
}