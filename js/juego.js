/*
 * JS for Masterdot's game
 */
// GLOBAL VARIABLES
var iniciadoMarcado = false;
var adyacentes = [];
var tamanoPanel;

// PANEL INICIALIZATION
// Returns random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function that fills nick and src avatar
function rellenarFormularioUsuario() {
    document.getElementById("nick").value = nick;
    document.getElementById("avatarImg").src = avatarImg;
    tamanoPanel = parseInt(tamano);
}

/*
 * Function that fills nick and avatar and draws automatically the game's panel
 */
function pintarPanelJuego() {
    document.getElementById("juego").style.gridTemplateColumns = "repeat(" + tamano + ", 1fr)";
    document.getElementById("juego").style.gridTemplateRows = "repeat(" + tamano + ", 1fr)";

    // Elements automatically
    let items = "";
    let color = ["azul", "rojo"];
    let colorRnd = 0;
    for (let index = 0; index < (parseInt(tamano) * parseInt(tamano)); index++) {
        if (index % 2 > 0) colorRnd = getRandomInt(2);

        items += `<div class="containerItem"><div id="${index}" class="item ${color[colorRnd]}"></div></div>`
    }
    document.getElementById("juego").innerHTML = items;
}

/**
 * Calculate the adjacents array
 *
 * @param {*} idMarcado marked number 
 */
function calcularAdyacentes(idMarcado) {
    adyacentes = [];

    // Superior adjacent
    if((idMarcado - tamanoPanel) >= 0) adyacentes.push(idMarcado - tamanoPanel);

    // Inferior adjacent
    if((idMarcado + tamanoPanel) < tamanoPanel ** 2) adyacentes.push(idMarcado + tamanoPanel);

    // Left adjacent
    if((idMarcado % tamanoPanel) > 0) adyacentes.push(idMarcado - 1);

    // Right adjacent
    if(((idMarcado + 1) % tamanoPanel) > 0) adyacentes.push(idMarcado + 1);

    for (let i = 0; i < adyacentes.length; i++) {
        console.log(adyacentes[i]);
    }
}

// Add events to the game
function programarEventosJuego() {
    const items = document.getElementsByClassName("item");
    for (let item of items) {
        item.addEventListener("mousedown", comenzarMarcar);
        item.addEventListener("mouseover", continuarMarcando);
    }
    document.addEventListener("mouseup", finalizarMarcado);
}

// GAME FUNCTIONS
/**
 * Start dots marking
 *
 * @param {*} event 
 */
function comenzarMarcar(event) {
    let item = event.target;
    let containerItem = item.parentElement;
    if(item.classList.contains("rojo")) containerItem.classList.add("rojo");
    else containerItem.classList.add("azul");
    if(!iniciadoMarcado) iniciadoMarcado = true;
    console.log("Pinchado sobre un circulo");
}

/**
 * Continue dots marking
 *
 * @param {*} event 
 */
function continuarMarcando(event) {
    if(iniciadoMarcado) {
        let item = event.target;
        let containerItem = item.parentElement;
        if(item.classList.contains("rojo")) containerItem.classList.add("rojo");
        else containerItem.classList.add("azul");

        // Test
        calcularAdyacentes(parseInt(item.id));
    }
    console.log("Pasando sobre un circulo");
}

/**
 * End dots marking
 *
 * @param {*} event 
 */
function finalizarMarcado(event) {
    iniciadoMarcado = false;
    console.log("Finalizar el marcado");
}

/*
* MAIN
*/
// Capture User's Data
getDatosUsuario();

// Check data
if (!comprobacionDatosUsuario()) location = "index.html";

// Fill form
rellenarFormularioUsuario();
pintarPanelJuego();
programarEventosJuego();