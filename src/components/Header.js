import React from 'react'

import Logo from '../images/logo.svg'

function Header() {
  return (
    <header className='header container'>
        <div className='header__image'>
            <img src={Logo} alt="Fylo logo" />
        </div>

        <nav className='header__nav'>
            <ul className='header__nav-items'>
                <li><a href='/'>Features</a></li>
                <li><a href='/'>Team</a></li>
                <li><a href='/'>Sign In</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header