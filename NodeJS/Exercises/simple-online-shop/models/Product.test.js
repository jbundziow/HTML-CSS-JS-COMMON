import {describe, it, expect, vi} from 'vitest'
const Product = require('./Product');
const db = require('../utilities/database');

vi.mock('db');

it('sdds', async () => {
    // Mock the db.execute function to return a sample result
    db.execute = vi.fn(() => Promise.resolve({ rows: [{ id: 1, title: 'Product A' }, { id: 2, title: 'Product B' }] }));


     const products = await Product.fetchAll();
    // const spy = vi.spyOn(db, 'execute')
    expect(db.execute).toHaveBeenCalledWith('SELECT * FROM `products`')
    expect(products).toEqual({ rows: [{ id: 1, title: 'Product A' }, { id: 2, title: 'Product B' }] })
    // console.log(x[0].length);
    db.execute.mockClear();
})