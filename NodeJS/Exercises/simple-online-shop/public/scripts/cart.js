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

function changeQuantity(element) {
    const {productQtyInCart} = getProductsFromLocalStorage();
    productQtyInCart[element.dataset.indexNum] = Number(element.value);
    localStorage.setItem('productQtyInCart', JSON.stringify(productQtyInCart));

    //sum
    productsSumInCart = 0;
    productQtyInCart.forEach(element => productsSumInCart += element)
    localStorage.setItem('productsSumInCart', JSON.stringify(productsSumInCart));
    updateNumberOfProductsInCart();

    updateCart()
}

async function updateCart() {
    const { productIDsInCart: IDs, productQtyInCart: QTYs } = getProductsFromLocalStorage();
    const productsData = await getProductsDataFromDatabase(IDs);


    console.log(productsData);

    // console.log(x);
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = '';

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
            <p class="item-sum-price">$${(product.price * QTYs[index]).toFixed(2)}</p>
        </div>
        <button class="delete-button" data-item-id="1">X</button>
        </div>
        `;
    });
}




updateCart();