// const axios = require('axios')
// import axios from "axios";


const getProductsFromLocalStorage = () => {
    const productIDsInCart = JSON.parse(localStorage.getItem('productIDsInCart')) || [];
    const productQtyInCart = JSON.parse(localStorage.getItem('productQtyInCart')) || [];

    return {productIDsInCart, productQtyInCart};
}

const getProductsDataFromDatabase = (ids) => {
    axios.put('/api/data')
    .then(res => console.log(res))
    
}

const updateCart = () => {
    const {productIDsInCart: IDs, productQtyInCart: QTYs} = getProductsFromLocalStorage();
    getProductsDataFromDatabase();

    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    cartItems.innerHTML = `
    <div class="cart-item">
    <div class="item-details">
        <h3 class="item-title">Product 1</h3>
        <p class="item-price">$19.99</p>
    </div>
    <div class="item-quantity">
        <label for="quantity-1">Quantity:</label>
        <input type="number" id="quantity-1" value="1" min="1" />
    </div>
    <div class="item-total">
        <p class="item-sum-price">$19.99</p>
    </div>
    <button class="delete-button" data-item-id="1">X</button>
    </div>
    `;
}

updateCart();