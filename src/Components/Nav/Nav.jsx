// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'
import Wallet from './Wallet'

const Nav = ({setDayTime, cash}) => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id="logo"><img src={Logo} alt="logo" /></NavLink>
      <NavLink to="/market">SUPER MARKET</NavLink>
      <NavLink to="/burgers">BURGER SHOP</NavLink>
      <Clock setDayTime={setDayTime}/>
      <Wallet cash={cash}/>
    </nav>
  )
}

export default Nav