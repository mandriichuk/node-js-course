const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

router.get('/products', (request, response) => {
   return response.json(products);
});

router.get('/products/:brand', blockSpecialBrand, (request, response) => {
   const { brand } = request.params; 

   const filteredProducts = products.filter(product => product.brand === brand);

   response.json(filteredProducts);
});

router.get('/products/:id', (request, response) => {
   const { id } = request.params;

   const product = products.find(product => product.id === parseInt(id));

   if (product) {
       response.json(product);
   } else {
       response.status(404).send('Product not found'); 
   }
});

router.get('/productswitherror', (request, response) => {
   let err = new Error("processing error ")
   err.statusCode = 400
   throw err
});

module.exports = router;