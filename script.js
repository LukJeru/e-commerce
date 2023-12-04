const cart = document.getElementById('cart');
const emptyCart = document.getElementById('emptyCart');

function displayInformation(event) {
  emptyCart.style.visibility = "visible";
}

cart.addEventListener("mouseover", displayInformation);
