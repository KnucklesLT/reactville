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

  console.log('Imported product data:::', products)
  return (
    <div className="super-market">
      <section>
        <MarketNav products={products}/>
        <DisplayProducts />
      </section>

      <Cart />

    </div>
  )
}

export default SuperMarket