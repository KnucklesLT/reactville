import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'

const App = () => {
  const [daytime, setDayTime] = useState(true)

  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
      if(cash - amt > 0) setCash((cash - amt).toFixed(2))
  }

  return (
    <>
      <Nav setDayTime={setDayTime} cash={cash}/>
      <main>
        <Routes>
          <Route path='/' element={<Landing daytime={daytime}/>}/>
          <Route path='/burgers' element={<BurgerShop />}/>
          <Route path='/market' element={<SuperMarket handleExchange={handleExchange}/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App