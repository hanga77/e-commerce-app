import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './Routes/Products.js';
import seedRouter from './Routes/SeedRoutes.js';
import { checkRequest } from './Controllers/Users.js';
import userRouter from './Routes/userRoute.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connexion a la bd');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/products', postRoutes);
app.use('/api/users', userRouter);
app.use(checkRequest);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
