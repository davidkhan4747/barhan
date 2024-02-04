import React from 'react'
import   './header.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
        <header >
          <div className="wrap flex">
            <NavLink to={'/'}>
              <div className='logo'>
                <img src={Logo} alt="logo barhan" />
              </div>
            </NavLink>
              <ul className='nav flex'>
                <li>
                  <NavLink to='/' className={'links'}>Главная </NavLink>
                </li>
                <li>
                  <NavLink to='/delivery' className={'links'}>Доставка</NavLink>
                </li>
                <li>
                  <NavLink to='/contacs' className={'links'}>Контакты</NavLink>
                </li>
              </ul>
          </div>
        </header>
  )
}

export default Header