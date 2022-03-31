const express = require("express");
const app = express();
const routeProduct = require('./routes/route_product');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', routeProduct);

app.listen(8000, () => {
  console.log('API online!')
})