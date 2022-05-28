import express from 'express';

import postRoutes from './Routes/Products.js';

const app = express();

app.use('/api/products', postRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
