/*
 * JS for checking the entry form data 
 * 
*/

// Initialization of var, objects, DOM
const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");

// Event functions
function comprobarForm(event) {
    // Check changes
    if (nickInput.value.length == 0) {
        console.log("No hay nick");
        nickInput.focus();
        event.preventDefault();
        return false;
    } else if (tamanoInput.value == "0") {
        console.log("No se ha seleccionado tamño del panel");
        tamanoInput.focus();
        event.preventDefault();
        return false;
    }
    return true;
}

// Events charge start
formEntrada.addEventListener("submit", comprobarForm);