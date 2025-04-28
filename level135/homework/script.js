export function registerUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userExists = users.find(user => user.username === username);
    if (userExists) {
      return { success: false, message: "User already exists" };
    }
  
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    return { success: true };
  }
  
  export function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return { success: true };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  }
  
  export function logoutUser() {
    localStorage.removeItem('currentUser');
  }
  
  export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  




// 2
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

export function getTotalPrice() {
  return cart.reduce((sum, product) => sum + product.price, 0);
}

export function renderCart() {
  const cartContainer = document.getElementById('cart');
  const totalPriceElement = document.getElementById('total-price');
  
  if (!cartContainer) return;

  cartContainer.innerHTML = '';

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <p>${item.name} - $${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(div);
  });

  totalPriceElement.innerText = `Total: $${getTotalPrice()}`;
}

// 3
import { addToCart, removeFromCart, renderCart } from './Cart.js';
import { getCurrentUser, logoutUser } from './Auth.js';

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
