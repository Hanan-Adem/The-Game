// CART DATA
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// CART ELEMENT
const cartBox = document.getElementById("cart-box");

// UPDATE ORDER SUMMARY
function updateSummary() {
  let subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  let tax = 0;
  let total = subtotal + tax;

  document.getElementById("subtotal").innerText = "$" + subtotal.toFixed(2);
  document.getElementById("tax").innerText = "$" + tax.toFixed(2);
  document.getElementById("total").innerText = "$" + total.toFixed(2);
}

// RENDER CART ITEMS
function renderCart() {
  cartBox.innerHTML = ""; // Clear previous items

  if(cart.length === 0){
    cartBox.innerHTML = "<p>Your cart is empty.</p>";
    updateSummary();
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="info">
        <h3>${item.title}</h3>
        <div class="price">$${item.price.toFixed(2)}</div>
      </div>
      <button class="remove" style="margin-left:10px;">X</button>
      <div class="divider"></div>
    `;

    // REMOVE BUTTON
    div.querySelector(".remove").addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });

    cartBox.appendChild(div);
  });

  updateSummary();
}

// ADD ITEM TO CART (Call this function when user clicks "Add to Cart")
function addToCart(game) {
  // Check if game already exists
  const exists = cart.find(item => item.title === game.title);
  if(exists){
    alert("Game already in cart!");
    return;
  }

  cart.push(game);
  localStorage.setItem("cart", JSON.stringify(cart));
  // renderCart();
  alert("Game added to cart ✅");
}

// INITIAL RENDER
renderCart();
