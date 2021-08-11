/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)

function clearCart() {
let removeRow = document.getElementsByTagName('tbody');
removeRow.textContent='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
let tableBody = document.getElementsByTagName('tbody')
  // TODO: Iterate over the items in the cart

for (let i=0 ;i<cart.items.length;){

}
  // TODO: Create a TR
  let row = document.createElement('tr')
  // TODO: Create a TD for the delete link, quantity,  and the item
  let deleteLink = document.createElement('td')
  let quantity = document.createElement('td')
  let item = document.createElement('td')
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  deleteLink.innerHTML = '<a href="#" id=" ' + i + ' "> Delete link </a>'
  quantity.textContent = cart.items[i].quantity
  item.textContent = cart.items[i].item



  row.appendChild(deleteLink)
  row.appendChild(quantity)
  row.appendChild(item)

tableBody.appendChild(row)


}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let deleteItem  = event.target.id
  
  cart.removeItem(deleteItem)
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(this.items))
  // TODO: Re-draw the cart table
  showCart()
}

// This will initialize the page and draw the cart on screen
renderCart();
