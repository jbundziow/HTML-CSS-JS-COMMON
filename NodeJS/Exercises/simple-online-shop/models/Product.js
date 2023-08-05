const db = require('../utilities/database');

class Product {
    constructor (id, title, description, price) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM `products`');
    }
}

module.exports = Product;