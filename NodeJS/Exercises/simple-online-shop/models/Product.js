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

    static fetchOneProduct(id) {
        return db.execute('SELECT * FROM `products` WHERE id=?', [id])   
    }

    static getAllIDs() {
        return db.execute('SELECT id FROM `products`')
    }

    insertOne() {
        return db.execute('INSERT INTO `products` (`title`, `description`, `price`) VALUES (?,?,?)', [this.title, this.description, this.price]);
    }

    static deleteProduct(id) {
        return db.execute('DELETE FROM `products` WHERE id=?', [id])
    }

    updateOne() {
        return db.execute('UPDATE `products` SET `title`=?, `description`=?, `price`=? WHERE `id`=?', [this.title, this.description, this.price, this.id]);
    }

    
}

module.exports = Product;