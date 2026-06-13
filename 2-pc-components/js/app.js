// Initialization of var, objects, DOM
var componentsImg;
var componentImg;
var parentImg;
var cart;
var cartComponents = [];
var total;
var form;

// Move image to cart
function moveImg(e) {
    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("text/plain", e.target.src);
    
    let halfWidth = e.target.clientWidth / 2;
    let halfHeight = e.target.clientHeight / 2;
    
    e.dataTransfer.setDragImage(e.target, halfWidth, halfHeight); 

    componentImg = e.target;
    parentImg = componentImg.parentElement.cloneNode(true);
}

// Add component to the 
function addComponent() {
    parentImg.style.width = "200px";
    cart.append(parentImg);

    let name = parentImg.querySelector("h3").innerText;
    let price = parentImg.querySelector(".price").innerText;
    
    // Add componentprice to total
    total.innerText = +price + +total.innerText;

    // Remove cart component
    parentImg.addEventListener("click", (e) => {
        let currentPrice = e.currentTarget.querySelector(".price").innerText;
        total.innerText = +total.innerText - +currentPrice; 
        
        // OPCIONAL: Eliminar también del array cartComponents si el usuario lo borra del carrito
        let nameToRemove = e.currentTarget.querySelector("h3").innerText;
        cartComponents = cartComponents.filter(item => item.name !== nameToRemove);

        e.currentTarget.remove(); 
    });
    
    cartComponents.push({
        name: name,
        price: price
    });
}

function getBill() {
    cartData(cartComponents);
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

    // Bill
    form = document.getElementById("form");
    form.addEventListener("submit", getBill);
}

// Events charge start
document.addEventListener("DOMContentLoaded", chargedDom);