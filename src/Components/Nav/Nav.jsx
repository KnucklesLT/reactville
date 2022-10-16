// Components & Assets
import Logo from '../../assets/react-logo.png'
import { NavLink } from 'react-router-dom'
import Clock from './Clock'

const Nav = ({setDayTime}) => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/" id="logo"><img src={Logo} alt="logo" /></NavLink>
      <NavLink to="/burgers">BURGER SHOP</NavLink>
      <Clock setDayTime={setDayTime}/>
    </nav>
  )
}

export default Nav