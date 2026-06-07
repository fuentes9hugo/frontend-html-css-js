/*
 * JS for the user's data management
 */

function datosUsuario(nick) {
    sessionStorage.setItem("nick", nick.value);
}

function mostrarDatosUsuario() {
    let nick = sessionStorage.getItem("nick")
    console.log(nick);
    
}