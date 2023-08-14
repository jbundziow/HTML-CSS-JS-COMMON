const db = require('../utilities/database');

class Order {
    constructor(id, customerName, customerSurname, productsIDs, productsQTYs, orderDate) {
        this.id = id;
        this.customerName = customerName;
        this.customerSurname = customerSurname;
        this.productsIDs = productsIDs;
        this. productsQTYs = productsQTYs;
        this.orderDate = orderDate;
    }

}