const db = require('../utilities/database');

class Order {
    constructor(id, customerName, customerSurname, productsIDs, productsQTYs, productsTitles, productsPrices, finalPrice, orderDate, orderStatus) {
        this.id = id;
        this.customerName = customerName;
        this.customerSurname = customerSurname;
        this.productsIDs = productsIDs;
        this. productsQTYs = productsQTYs;
        this.productsTitles = productsTitles;
        this.productsPrices = productsPrices;
        this.finalPrice = finalPrice;
        this.orderDate = new Date(orderDate).toISOString().replace('T', ' ').replace('Z', '');
        this.orderStatus = orderStatus;
    }


    static fetchAll() {
        return db.execute('SELECT * FROM `orders`');
    }
    insertOne = () => {
        return db.execute('INSERT INTO `orders` (`customerName`, `customerSurname`, `productsIDs`, `productsQTYs`, `productsTitles`, `productsPrices`, `finalPrice`, `orderDate`, `orderStatus`) VALUES (?,?,?,?,?,?,?,?,?)', [this.customerName, this.customerSurname, this.productsIDs, this.productsQTYs, this.productsTitles, this.productsPrices, this.finalPrice, this.orderDate, this.orderStatus]);
    }

}



module.exports = Order;