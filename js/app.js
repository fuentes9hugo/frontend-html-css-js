/*
 * JS for checking the entry form data 
 * 
*/

// Initialization of var, objects, DOM
const botonJugar = document.getElementById("jugar");

// Event functions
function comprobarForm() {
    console.log("Comprobamos el formulario");
}

function ejecutarAccion() {
    console.log("Ejecutar acción");
    botonJugar.removeEventListener("click", ejecutarAccion);
}

botonJugar.addEventListener("click", comprobarForm);
botonJugar.addEventListener("click", ejecutarAccion);