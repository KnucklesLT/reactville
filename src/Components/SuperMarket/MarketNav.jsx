import CategoryMenu from './CategoryMenu'

const MarketNav = ({products, setProductCategory, toggleCart, setToggleCart}) => {
  return (
    <nav>
      <h1>Super Market</h1>
      <CategoryMenu products={products} setProductCategory={setProductCategory}/>
      <button id="cart-button" onClick={() => setToggleCart(!toggleCart)}></button>
    </nav>
  )
}

export default MarketNav
