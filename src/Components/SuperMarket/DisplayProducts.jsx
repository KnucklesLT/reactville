import Product from './Product'

const DisplayProducts = ({products, productCategory}) => {
  const selectedProducts = products.map((product, index) => {
    return product.category === productCategory &&
    <Product
      key={index}
      product={product}
    />
  })
  return (
    <div className="product-list">
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts
