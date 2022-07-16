import React from 'react'
import './NavBar.css'

const NavBar = ({isScrolling}) => {
  return (
    <nav className={`navbar ${isScrolling > 120 ? 'scrolling' : null}`}>
        <div className='navbar-logo'>
            Barra de navegacion (tengo que hacerla responsive, pero mas tarde)
        </div>

    </nav>
  )
}

export default NavBar