const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.get('/api/products', (req, res) => {
  // Retrieve and return all products
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];
  res.json(products);
});

// Example route: GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  // Retrieve and return a single product based on the provided ID
  const productId = req.params.id;
  const product = { id: productId, name: `Product ${productId}` };
  res.json(product);
});

// Add more routes as needed for your API

