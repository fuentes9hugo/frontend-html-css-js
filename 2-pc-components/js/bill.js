getCartData();

function chargedDom() {
    const bill = document.getElementById("bill");

    bill.innerHTML = "";

    for (let component of cartComponents) {
        const item = document.createElement("li");

        item.textContent = `${component.name} - ${component.price}€`;

        bill.appendChild(item);
    }
}

document.addEventListener("DOMContentLoaded", chargedDom);