/*
 * JS for checking the entry form data 
 *
 * @author Hugo Fuentes <fuentes9hugo@gmail.com>
 * @link https://github.com/fuentes9hugo/frontend-html-css-js GitHub
 */

// Initialization of var, objects, DOM
var nickInput;
var tamanoInput;
var emailInput;
var formEntrada;
var error;
var avatarItems;
var itemImg;
var avatarCont;

// Event functions
/**
 * Check entry form correct data
 *
 * @param {EventObject} event event that jumps at execute submit
 * @returns {boolean} 
 */
function comprobarForm(event) {
    // Check changes
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        nickInput.focus();
        event.preventDefault();
        error.innerText = "El campo de nick no puede comenzar con un número";
        return false;
    } else if (tamanoInput.value == "0") {
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = "Se debe seleccionar un tamaño de panel";
        return false;
    }
    // Correct information
    datosUsuario(nickInput, tamanoInput, emailInput);
    historicoUsuarios(nickInput);
    return true;
}

function moviendoImg(event) {
    itemImg = event.target;
    console.log(itemImg.src);
    
}

function cambiarImg() {
    avatarCont.src = itemImg.src;
}

/*
 * DOM Objects charge, checks and form events
 */
function domCargado() {
    // All Elements capture
    nickInput = document.getElementById("nick");
    tamanoInput = document.getElementById("tamano");
    emailInput = document.getElementById("email");
    formEntrada = document.getElementById("formEntrada");
    error = document.getElementById("error");

    // Check any juego.html error
    if(sessionStorage.getItem("error")) {
        error.innerText = sessionStorage.getItem("error");
        sessionStorage.removeItem("error");
    }

    formEntrada.addEventListener("submit", comprobarForm);

    // Drag & Drop events
    avatarItems = document.getElementsByClassName("avatarImgItem");
    for (let item of avatarItems) {
        item.addEventListener("dragstart", moviendoImg);
    }

    avatarCont = document.getElementById("avatarImg");
    avatarCont.addEventListener("dragover", e => {e.preventDefault()});
    avatarCont.addEventListener("drop", cambiarImg);
}

// Events charge start
document.addEventListener("DOMContentLoaded", domCargado);

// Geolocation
datoGeolocalizacion();