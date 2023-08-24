import {describe, it, expect, vi} from 'vitest';
const { showHomepage, showCartPage, showProductDetailsPage } = require('./shop');
const db = require('../utilities/database');
const Product = require('../models/Product')

describe('showHomepage() test', () => {
    it('should render the homepage', async () => {
      const req = {};
      const res = {
        render: vi.fn(),
      };
      const next = vi.fn();

      db.execute = vi.fn(() => Promise.resolve([[0,1],['sth1', 'sth2']]));

  
      await showHomepage(req, res, next);
      expect(res.render).toHaveBeenCalledWith('./shop/index', {products: [0,1]})
      expect(next).not.toHaveBeenCalled(); 
      
      res.render.mockClear();
      next.mockClear();
      db.execute.mockClear();
    });

    it('shouldnt render the homepage because promise rejected', async () => {
        const req = {};
        const res = {
            render: vi.fn()
        }
        const next = vi.fn();
        db.execute = vi.fn(()=> Promise.reject('some error...'));
        const consoleLogSpy = vi.spyOn(console, 'log');

        await showHomepage(req,res,next);

        expect(consoleLogSpy).toHaveBeenCalledOnce();
        expect(consoleLogSpy).toHaveBeenCalledWith('some error...')
        expect(res.render).not.toHaveBeenCalled()


      });
  });










describe('showCartPage() test', () => {
  it('should render the cart page', () => {
    const req = {};
    const res = {
      render: vi.fn(),
    };
    const next = vi.fn();

    showCartPage(req, res, next);

    expect(res.render).toHaveBeenCalledWith('shop/cart');
    expect(next).not.toHaveBeenCalled(); 

    res.render.mockClear();
    next.mockClear();
  });
});








describe('showProductDetailsPage() test', () => {
    it('should render the product page', async () => {
        const req = {
          params: {
            id: 2,
          },
        };
        const res = {
          render: vi.fn(),
        };
        const next = vi.fn();
    
        
        vi.spyOn(Product, 'getAllIDs').mockResolvedValue([[{ id: 2 }]]);
    
        vi.spyOn(Product, 'fetchOneProduct').mockResolvedValue([[{ id: 2, name: 'Product 2' }]]);
    
        await showProductDetailsPage(req, res, next);
    
        expect(Product.getAllIDs).toHaveBeenCalled();
        expect(Product.fetchOneProduct).toHaveBeenCalledWith(2);
        expect(res.render).toHaveBeenCalledWith('./shop/productDetailsPage', {
          product: { id: 2, name: 'Product 2' },
        });
        expect(next).not.toHaveBeenCalled();
      });

      it('should redirect to 404 when something goes wrong', async () => {
        const req = {
          params: {
            id: 2,
          },
        };
        const res = {
          render: vi.fn(),
          redirect: vi.fn(),
        };
        const next = vi.fn();

        Product.getAllIDs = vi.fn(()=>Promise.reject('error occurs!'))

        await showProductDetailsPage(req, res, next);
    
        expect(res.redirect).toHaveBeenCalledWith('404')
      });
  });
  




