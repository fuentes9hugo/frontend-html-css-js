/*
* JS for the entry form data checkup
*/

// Capture nick input value
const nickInput = document.getElementById("nick");
console.log(nickInput.nodeType);
nickInput.value = "Paco";
console.log(nickInput.value);

// Capture select value
const tamanoInput = document.getElementById("tamano");
console.log(tamanoInput.value);
console.log(tamanoInput.options[tamanoInput.selectedIndex].text);

// Ejemplo sobre eventos
function test() {
    console.log("EVENTO SOBRE RATÓN");
    
}