import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
  <footer >
          <div className="wrap flex">
              <div>
                <h1>Footer</h1>
              </div>
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
        </footer>
    </>
  )
}

export default Footer