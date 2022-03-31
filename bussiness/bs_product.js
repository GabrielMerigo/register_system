let idAutoIncrement = 2

const listProducts = [
  { id: 1, product: 'milk', price: 7 }
];

exports.list = () => listProducts

exports.getById = (id) => {
  const product = listProducts.find(product => product.id == id)

  if (product) {
    return product
  } else {
    throw new Error('Product not found')
  }
}


exports.create = (product) => {
  if (product && product.product && product.price) {
    product['id'] = idAutoIncrement++;
    listProducts.push(product)
    return product;
  } else {
    throw new Error('Product not found')
  }
}
