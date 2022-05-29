import express from 'express';
import { creatProducts } from '../Controllers/Products.js';

const seedRouter = express.Router();

seedRouter.get('/', creatProducts);

export default seedRouter;
