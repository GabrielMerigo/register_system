const produto = require('../bs_product');

beforeEach(() => {
  produto.toEmpty();
})

test('Listar é vazio inicialmente', () => {
  expect(produto.list()).toEqual([])
});

test('inserir um produto, a lista contém um produto com o id', () => {
  produto.create({ product: 'milk', price: 12 })
  expect(produto.list()).toEqual(
    [{id: 1,  price: 12, product: 'milk'}]
  )
});


test('Ao inserir sem nome, gera um erro', () => {
  let product = {id: 1, product: 'milk', price: 12}
  expect(() => product.create(product).toThrow("Falta o nome do produto"))
})