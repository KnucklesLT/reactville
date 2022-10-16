import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'

const App = () => {
  const [daytime, setDayTime] = useState(true)
  return (
    <>
      <Nav setDayTime={setDayTime}/>
      <main>
        <Routes>
          <Route path='/' element={<Landing daytime={daytime}/>}/>
          <Route path='/burgers' element={<BurgerShop />}/>
        </Routes>
      </main>
    </>
  )
}

export default App