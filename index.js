const express = require("express");
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let idAutoIncrement = 2

const listProducts = [
  { id: 1, product: 'milk', price: 7 }
];

app.get('/api/products', (req, res) => {
  res.send(listProducts);
})

app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = listProducts.find(product => product.id == id)

  if (product?.id) {
    res.status(200).send({ product: product.product, price: product.price, id: product.id })
  } else {
    res.status(404).send({ error: 'Product not found' })
  }
})

app.post('/api/products', (req, res) => {
  const product = req.body;
  if (product && product.product && product.price) {
    product['id'] = idAutoIncrement++;
    listProducts.push(product)
    res.status(201).send(`product: ${product.product} and price: ${product.price}`)
  } else {
    res.status(400).send({ error: 'Error to create the product' })
  }
})

app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const index = listProducts.findIndex(product => product.id === id)
  const productSelected = listProducts.splice(index)

  if(productSelected[0]?.id){
    res.status(200).send({ productDeleted: productSelected });
  }else{
    res.status(400).send({ error: 'Product not found' });
  }
})

app.listen(8000, () => {
  console.log('API online!')
})