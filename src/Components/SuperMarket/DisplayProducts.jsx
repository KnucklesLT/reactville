import Product from './Product'

const DisplayProducts = ({products, productCategory, addToCart}) => {
  const selectedProducts = products.map((product, index) => {
    return product.category === productCategory &&
    <Product
      key={index}
      product={product}
      addToCart={addToCart}
    />
  })
  return (
    <div className="product-list">
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts
