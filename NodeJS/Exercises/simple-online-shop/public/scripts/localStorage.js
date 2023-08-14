
const productIDsInCart = JSON.parse(localStorage.getItem('productIDsInCart')) || [];
const productQtyInCart = JSON.parse(localStorage.getItem('productQtyInCart')) || [];
let productsSumInCart = JSON.parse(localStorage.getItem('productsSumInCart')) || 0;



const addProductToCard = (id) => {
    id = Number(id);
    if(id === NaN) {
        return;
    }

    if(productIDsInCart.includes(id)) {
        const index = productIDsInCart.indexOf(id);
        productQtyInCart[index] += 1;
    }
    else {
    productIDsInCart.push(id)
    productQtyInCart.push(1);
    }
    localStorage.setItem('productIDsInCart', JSON.stringify(productIDsInCart));
    localStorage.setItem('productQtyInCart', JSON.stringify(productQtyInCart));

    
    updateNumberOfProductsInCart();
}

const updateNumberOfProductsInCart = () => {
    let sum = 0;
    const productQtyInCart = JSON.parse(localStorage.getItem('productQtyInCart')) || 0;
    productQtyInCart.forEach(element => sum += element)
    localStorage.setItem('productsSumInCart', JSON.stringify(sum));

    const productsSumInCartSpan = document.getElementById("productsSumInCart");
    if (productsSumInCartSpan) {
        productsSumInCartSpan.textContent = sum;
    }
    
}


updateNumberOfProductsInCart();