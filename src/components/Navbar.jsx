import React, { useState } from 'react'
import '../styles/navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const mostrarMenu = () => {
        setToggleMenu(!toggleMenu)
    }

  return (
    <div className='navbar__containerSuperior'>
    <nav className='navbar__container'>
        <p className='navbar__logo'>Navbar</p>

        <ul className='navbar__links'>
            <li className='navbar__linkContainer'><a className='navbar__link' href='/'>Inicio</a></li>
            <li className='navbar__linkContainer'><a className='navbar__link' href='/'>Acerca De</a></li>
            <li className='navbar__linkContainer'><a className='navbar__link' href='/'>Contacto</a></li>
        </ul>
        
        <button onClick={mostrarMenu} className='navbar__buttonMenu'><i className="fa-solid fa-bars"></i></button>
    </nav>

    {toggleMenu && <div>
            <ul className='navbar__drawer'>
                <h3>Menu</h3>
                <li className='navbar__linkContainer'><a className='navbar__link' href='/'>Inicio</a></li>
                <div className='navbar__separador'></div>
                <li className='navbar__linkContainer'><a className='navbar__link' href='/'>Acerca De</a></li>
                <div className='navbar__separador'></div>
                <li className='navbar__linkContainer'><a className='navbar__link' href='/'>Contacto</a></li>
            </ul>
        </div>}
    </div>
  )
}

export default Navbar