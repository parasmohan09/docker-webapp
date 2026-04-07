let cart = [];

function addToCart(item) {
    cart.push(item);
    document.getElementById("cart-count").innerText = cart.length;
    alert(item + " added to cart!");   
}

function viewCart() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Items in cart:\n" + cart.join("\n"));
    }
}