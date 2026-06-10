// Initialization of var, objects, DOM
var componentsImg;
var cart;

function moveImg(e) {
    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("text/plain", e.target.src);
    
    let halfWidth = e.target.clientWidth / 2;
    let halfHeight = e.target.clientHeight / 2;
    
    e.dataTransfer.setDragImage(e.target, halfWidth, halfHeight); 
    
    console.log(e.target.alt);
}

// DOM Objects charge, checks and form events
function chargedDom() {
    // Drag & Drop
    componentsImg = document.getElementsByClassName("component-img");

    for (let img of componentsImg) {
        img.addEventListener("dragstart", moveImg);
    }

    cart = document.getElementById("cart");
    cart.addEventListener("dragover", e => {e.preventDefault();});
    cart.addEventListener("drop", () => {console.log("movido");});
}

// Events charge start
document.addEventListener("DOMContentLoaded", chargedDom);