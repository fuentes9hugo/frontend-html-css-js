/*
 * JS for the user's data management
 *
 * @author Hugo Fuentes <fuentes9hugo@gmail.com>
 * @link https://github.com/fuentes9hugo/frontend-html-css-js GitHub
 */

var nick;
var tamano;
var email;
var geolocalizacionTxt;
var avatarImg;

/**
 * Store data using sessionStorage
 *
 * @param {HTMLElement} nick user's nick
 * @param {HTMLElement} tamano panel size
 * @param {HTMLElement} email user's email
 */
function datosUsuario(nick, tamano, email, avatarCont) {
    sessionStorage.setItem("nick", nick.value);
    sessionStorage.setItem("tamano", tamano.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("geolocalizacionTxt", geolocalizacionTxt);
    sessionStorage.setItem("avatarImg", avatarCont.src);
}

function getDatosUsuario() {
    nick = sessionStorage.getItem("nick");
    tamano = sessionStorage.getItem("tamano");
    email = sessionStorage.getItem("email");
    avatarImg = sessionStorage.getItem("avatarImg");
}

function comprobacionDatosUsuario() {
    if(nick == null) {
        sessionStorage.setItem("error", "No se ha rellenado correctamente el formulario");
        return false;

    }
    return true;
}

function datoGeolocalizacion() {
    if (!navigator.geolocation) {
        geolocalizacionTxt = "El navegador no es compatible con API Geolocation";
    } else {
        navigator.geolocation.getCurrentPosition(
            // Success
            (position) => {geolocalizacionTxt = "Latitud:" + position.coords.latitude + ",longitud:" + position.coords.longitude},
            // Error
            () => {geolocalizacionTxt = "La geolocalización no se ha podido realizar"}
        );
    }
}

// localStorage
function historicoUsuarios(nick) {
    let historicoStorage = localStorage.getItem("historico");
    let historico;

    if (historicoStorage == null) {
        historico = [];
    } else {
        historico = JSON.parse(historicoStorage);
    }

    let registroUsuario = {
        usuario: nick.value,
        fecha: Date.now()
    }

    historico.push(registroUsuario);

    localStorage.setItem("historico", JSON.stringify(historico));
}