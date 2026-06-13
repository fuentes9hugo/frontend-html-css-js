var cartComponents;

function cartData(cartComponents) {
    sessionStorage.setItem("cartComponents", JSON.stringify(cartComponents));
}

function getCartData() {
    const data = cartComponents = sessionStorage.getItem("cartComponents");

    if (data) {
        cartComponents = JSON.parse(data);
    } else {
        cartComponents = [];
    }

    return cartComponents
}