import '../../styles/super-market.css'
import { useState } from 'react'

// Components & Data
import { products } from '../../data/market-data'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')

  const addToCart = (item) => {
    const isItemInCart = cart.some(el => el.id === item.id)

    if(isItemInCart){
      setCart(cart.map(el => el.id === item.id 
        ? {...el, quantity: el.quantity + 1}
        : el
      ))
    } else {
      setCart([{...item, quantity: 1},...cart])
    }
  }

  const removeFromCart = (item) => {
    if (item.quantity > 1 ){
      setCart(cart.map(el => el.id === item.id
        ? {...item, quantity: item.quantity -1}
        : el
      ))
    } else {
      setCart(cart.filter(el => el.id !== item.id))
    }

  }

  return (
    <div className="super-market">
      <section>
        <MarketNav products={products} setProductCategory={setProductCategory}/>
        <DisplayProducts products={products} productCategory={productCategory} addToCart={addToCart}/>
      </section>

      <Cart cart={cart} removeFromCart={removeFromCart}/>

    </div>
  )
}

export default SuperMarket