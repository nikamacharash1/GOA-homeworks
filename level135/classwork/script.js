1
export const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
  ];
  
  export function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  export function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsContainer.appendChild(div);
    });
  }
  
2
import { getProductById } from './product.js';

export let cart = [];

export function addToCart(id) {
  const product = getProductById(id);
  if (product) {
    cart.push(product);
    renderCart();
  }
}

export function renderCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';

  cart.forEach((product, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>Price: $${product.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  const total = getTotalPrice();
  const totalDiv = document.getElementById('total');
  totalDiv.innerText = `Total: $${total}`;
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

export function getTotalPrice() {
  return cart.reduce((sum, product) => sum + product.price, 0);
}

3
import { renderProducts } from './product.js';
import { addToCart, renderCart, removeFromCart } from './cart.js';

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
});





