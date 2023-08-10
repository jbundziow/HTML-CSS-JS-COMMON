
const productIDsInCart = JSON.parse(localStorage.getItem('productIDsInCart')) || [];
const productQtyInCart = JSON.parse(localStorage.getItem('productQtyInCart')) || [];
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


    // const ids = localStorage.getItem('productIDsInCart');
    // const qtys = localStorage.getItem('productQtyInCart');
    
    // console.log(JSON.parse(ids));
    // console.log(JSON.parse(qtys));
}