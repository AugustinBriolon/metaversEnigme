import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { BubblyLink } from "react-bubbly-transitions";


export default function Nav() {
  
  const [showLinks, setShowLinks] = useState(false)
  
  const hangleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <>
      <nav className={`${showLinks ? "showNav" : "hidden"} navbar`} style={{ animationDelay: "800ms"}}>
        <div className="navBox">
          <BubblyLink to="/" className='logoMetaverse' aria-label="Logo Principal Metaverse" id="buttonlogo" colorStart="#009FFF" colorEnd="#DF0FEB">
            <img className='logo' src="/img/image-removebg-preview.png" alt="logo Metaverse" />
          </BubblyLink>
        </div>
        <ul className="navListLinks">
          <li className="navItem navBox">
            <BubblyLink to="/test1" className='navLinks' onClick={hangleShowLinks} colorStart="#009FFF" colorEnd="#DF0FEB" children="Test1"></BubblyLink>
          </li>
          <li className="navItem navBox">
            <BubblyLink to="/test2" className='navLinks' onClick={hangleShowLinks} colorStart="#009FFF" colorEnd="#DF0FEB" children="Test2"></BubblyLink>
          </li>
          <li className="navItem navBox">
            <BubblyLink to="/test3" className='navLinks' onClick={hangleShowLinks} colorStart="#009FFF" colorEnd="#DF0FEB" children="Test3"></BubblyLink>
          </li>
        </ul>
        <button className='navBurger' onClick={hangleShowLinks} aria-label="BurgerLogo">
          <span className='burgerBar'></span>
        </button>
      </nav>
      <Outlet />
    </>
  )
}
