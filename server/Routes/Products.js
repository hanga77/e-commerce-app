import express from 'express';
import {
  buyProduct,
  getAllProducts,
  getProduct,
} from '../Controllers/Products.js';

const router = express.Router();

router.get('/slug/:slug', getProduct);
router.get('/:id', buyProduct);
router.get('/', getAllProducts);

export default router;
