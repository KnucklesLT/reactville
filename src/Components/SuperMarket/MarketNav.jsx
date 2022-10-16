import CategoryMenu from './CategoryMenu'

const MarketNav = ({products}) => {
  return (
    <nav>
      <h1>Super Market</h1>
      <CategoryMenu products={products}/>
      <button id="cart-button"></button>
    </nav>
  )
}

export default MarketNav
