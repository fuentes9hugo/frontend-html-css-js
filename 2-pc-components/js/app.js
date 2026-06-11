// Initialization of var, objects, DOM
var componentsImg;
var componentImg;
var parentImg;
var cart;
var total;

// Move image to cart
function moveImg(e) {
    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("text/plain", e.target.src);
    
    let halfWidth = e.target.clientWidth / 2;
    let halfHeight = e.target.clientHeight / 2;
    
    e.dataTransfer.setDragImage(e.target, halfWidth, halfHeight); 

    componentImg = e.target;
    parentImg = componentImg.parentElement.cloneNode(true);

    console.log(componentImg.alt);
}

function addComponent() {
    cart.append(parentImg);

    
    total.innerText = +parentImg.querySelector(".price").innerText + +total.innerText
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
    cart.addEventListener("drop", addComponent);

    // Total price element
    total = document.getElementById("total");
}

// Events charge start
document.addEventListener("DOMContentLoaded", chargedDom);