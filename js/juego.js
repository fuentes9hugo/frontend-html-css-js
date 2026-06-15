/*
 * JS for Masterdot's game
 */

// Returns random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function that fills nick and src avatar
function rellenarFormularioUsuario() {
    document.getElementById("nick").value = nick;
    document.getElementById("avatarImg").src = avatarImg;
}

function pintarPanelJuego() {
    document.getElementById("juego").style.gridTemplateColumns = "repeat(" + tamano + ", 1fr)";
    document.getElementById("juego").style.gridTemplateRows = "repeat(" + tamano + ", 1fr)";

    // Elements automatically
    let items = "";
    let color = ["blue", "red"];
    let colorRnd = 0;
    for (let index = 0; index < (parseInt(tamano) * parseInt(tamano)); index++) {
        if (index % 2 > 0) colorRnd = getRandomInt(2);
        
        items += `<div class="containerItem"><div class="item ${color[colorRnd]}"></div></div>`
    }
    document.getElementById("juego").innerHTML = items;
}

// Capture User's Data
getDatosUsuario();

// Check data
if (!comprobacionDatosUsuario()) location="index.html";

// Fill form
rellenarFormularioUsuario();
pintarPanelJuego();