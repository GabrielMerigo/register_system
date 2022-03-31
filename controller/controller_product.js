const bsProduct = require('../bussiness/bs_product');

exports.list = (req, res) => {
  res.status(200).json(bsProduct.list())
}

exports.getById = (req, res) => {
  const id = req.params.id;
  try{
    const product = bsProduct.getById(id);
    res.json(product);
  }catch(err){
    res.status(404).json({ erro: err.message})
  }
}

exports.create = (req, res) => {
  const product = req.body;

  try{
    res.status(200).json({ product })
  }catch(err){
    res.status(400).json({ erro: err.message })
  }
}

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  const index = listProducts.findIndex(product => product.id === id)
  const productSelected = listProducts.splice(index)

  if(productSelected[0]?.id){
    res.status(200).send({ productDeleted: productSelected });
  }else{
    res.status(400).send({ error: 'Product not found' });
  }
}