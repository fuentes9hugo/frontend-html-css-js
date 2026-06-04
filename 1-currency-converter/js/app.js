// Elements
const euros = document.getElementById("euros");
const form = document.querySelector("form");
const error = document.getElementById("error");
const dollars = document.getElementById("dollars");
const pounds = document.getElementById("pounds");
const yen = document.getElementById("yen");

// Convert euros and print HTML values
function convert(event) {
    event.preventDefault();
    const eurosAmmount = parseFloat(euros.value);

    if (euros.value == "") {
        euros.focus();
        error.innerText = "El campo de euros no puede estar vacío";
        return false;

    } else if (isNaN(eurosAmmount)) {
        euros.focus();
        error.innerText = "Los euros deben ser un número";
        return false;
    }
    
    dollars.value = (eurosAmmount * 1.16).toFixed(2);
    pounds.value = (eurosAmmount * 0.87).toFixed(2);
    yen.value = (eurosAmmount * 185.9).toFixed(2);

    return true;
}

form.addEventListener("submit", convert);