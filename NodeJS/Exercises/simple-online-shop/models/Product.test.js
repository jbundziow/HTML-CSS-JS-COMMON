import {describe, it, expect, vi, beforeEach} from 'vitest'
const Product = require('./Product');
const db = require('../utilities/database');

beforeEach(()=> {
    vi.mock('db');
})

describe('Product constructor test', () => {
    it('should create new instance of Product', () => {
        const prod = new Product('2', 'title', 'desc', 22);
        

        
        expect(prod).toBeInstanceOf(Product)

        expect(prod).toHaveProperty('id')
        expect(prod.id).toBe('2')

        expect(prod).toHaveProperty('title')
        expect(prod.title).toBe('title')

        expect(prod).toHaveProperty('description')
        expect(prod.description).toBe('desc')

        expect(prod).toHaveProperty('price')
        expect(prod.price).toBe(22)

    })
})

describe('Product.fetchAll() test', () => {
    it('should fetch data from db', async () => {
        const correctResponse =   [[
            {
              id: 6,
              title: 'product1',
              description: 'desc1',
              price: 22
            },
            {
                id: 7,
                title: 'product2',
                description: 'desc2',
                price: 23.83
              },
          ]]
      
        db.execute = vi.fn(() => Promise.resolve(correctResponse));
        const products = await Product.fetchAll();

        expect(db.execute).toHaveBeenCalledWith('SELECT * FROM `products`')
        expect(products).toEqual(correctResponse)

        db.execute.mockClear();
    })

    it('should catch error while promise is rejected', async () => {
      
        db.execute = vi.fn(() => Promise.reject('some error...'));

        await expect(Product.fetchAll()).rejects.toBe('some error...');
        expect(db.execute).toHaveBeenCalledWith('SELECT * FROM `products`')
     
        db.execute.mockClear();
    })

    it('should catch error while promise is rejected ver2 (try/catch)', async () => {
      
        db.execute = vi.fn(() => Promise.reject('error'));

        try{
        const prods = await Product.fetchAll();
        }
        catch (err) {
            expect(err).toBe('error')
        }

        db.execute.mockClear();
    })
})
