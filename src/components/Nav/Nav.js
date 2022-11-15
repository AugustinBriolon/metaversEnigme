import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Nav() {
  
  const [showLinks, setShowLinks] = useState(false)
  
  const hangleShowLinks = () => {
    setShowLinks(!showLinks)
  }


  return (
    <div>
      <nav className={`${showLinks ? "showNav" : "hidden"} navbar`}>
        <div className="navBox">
          <Link to="/" className='logoMetaverse' aria-label="Logo Principal Metaverse">
            <img src="/img/metaverse.webp" alt="logo Metaverse" />
          </Link>
        </div>
        <ul className="navListLinks">
          <li className="navItem navBox">
            <Link to="/test1" className='navLinks' onClick={hangleShowLinks}>Test1</Link>
          </li>
          <li className="navItem navBox">
            <Link to="/test2" className='navLinks' onClick={hangleShowLinks}>Test2</Link>
          </li>
        </ul>
        <button className='navBurger' onClick={hangleShowLinks} aria-label="BurgerLogo">
          <span className='burgerBar'></span>
        </button>
      </nav>
      <Outlet />
    </div>
  )
}
