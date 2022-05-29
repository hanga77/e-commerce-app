import express from 'express';
import {
  buyProduct,
  getAllProducts,
  getProduct,
} from '../Controllers/Products.js';

const productRouter = express.Router();

productRouter.get('/slug/:slug', getProduct);
productRouter.get('/:id', buyProduct);
productRouter.get('/', getAllProducts);

export default productRouter;
