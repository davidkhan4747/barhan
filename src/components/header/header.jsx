import React from 'react'
import   './header.scss'
import { NavLink , Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
        <header >
          <div className="wrap flex">
            <Link to={'/'}>
              <div className='logo'>
                <img src={Logo} alt="logo barhan" />
              </div>
            </Link>
                <li>
                  <NavLink to='/' className={'links'}>Главная </NavLink>
                </li>
                <li>
                  <NavLink to='/delivery' className={'links'}>Доставка</NavLink>
                </li>
                <li>
                  <NavLink to='/menu' className={'links'}>Меню </NavLink>
                </li>
                <li>
                  <NavLink to='/contacs' className={'links'}>О Ресторане</NavLink>
                </li>
                <li>
                  <a  href='tel:+7 (4967) 76-46-46'> +7 (4967) 76-46-46</a>
                </li>
          </div>
        </header>
  )
}

export default Header