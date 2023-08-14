// const axios = require('axios')
// import axios from "axios";




const getProductsFromLocalStorage = () => {
    const productIDsInCart = JSON.parse(localStorage.getItem('productIDsInCart')) || [];
    const productQtyInCart = JSON.parse(localStorage.getItem('productQtyInCart')) || [];

    return {productIDsInCart, productQtyInCart};
}

const getProductsDataFromDatabase = async (ids) => {
    const response = await axios.put('/api/products-data', {ids});
    if(response.status === 200) {
        return response.data;
    }
    else {
        return []
    }
}

const changeQuantity = (element) => {
    const {productQtyInCart} = getProductsFromLocalStorage();
    productQtyInCart[element.dataset.indexNum] = Number(element.value);
    localStorage.setItem('productQtyInCart', JSON.stringify(productQtyInCart));

    updateCart()
    updateNumberOfProductsInCart();
}

const deleteProductFromCart = (element) => {
    const {productIDsInCart, productQtyInCart} = getProductsFromLocalStorage();
    productIDsInCart.splice(element.dataset.indexNum, 1);
    productQtyInCart.splice(element.dataset.indexNum, 1);
    localStorage.setItem('productIDsInCart', JSON.stringify(productIDsInCart));
    localStorage.setItem('productQtyInCart', JSON.stringify(productQtyInCart));

    updateCart();
    updateNumberOfProductsInCart();
}

async function updateCart() {
    const { productIDsInCart: IDs, productQtyInCart: QTYs } = getProductsFromLocalStorage();
    const productsData = await getProductsDataFromDatabase(IDs);

    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';
    if(productsData.length === 0) {
        const h3 = document.createElement('h3');
        h3.append('There are no products in the cart!');
        cartItems.append(h3);

        const cartSummaryDiv = document.querySelector('.cart-total');
        cartSummaryDiv.remove();
    }
    productsData.forEach((product, index) => {
        cartItems.innerHTML += `
        <div class="cart-item">
        <div class="item-details">
            <h3 class="item-title">${product.title}</h3>
            <p class="item-price">$${product.price.toFixed(2)}</p>
        </div>
        <div class="item-quantity">
            <label for="quantity-1">Quantity:</label>
            <input type="number" id="quantity-1" data-index-num="${index}" value="${QTYs[index]}" min="1" onchange="changeQuantity(this)" />
        </div>
        <div class="item-total">
            <p class="item-sum-price">$<span class="item-price-sum">${(product.price * QTYs[index]).toFixed(2)}</span></p>
        </div>
        <button class="delete-button" data-index-num="${index}" onclick="deleteProductFromCart(this)">X</button>
        </div>
        `;
    });


    //update total-price
    let allPrices = [...document.querySelectorAll('.item-price-sum')];
    allPrices = allPrices.map(el => Number(el.innerText));
    const sumPrice = allPrices.reduce((partialSum, a) => partialSum + a, 0).toFixed(2);

    const totalPrice = document.querySelector('#total-price');
    totalPrice.textContent = sumPrice;
}




updateCart();