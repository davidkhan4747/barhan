import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './delivery-menu.scss'
import imgimg from '../../assets/dd.jpg'
import BannerBlock from '../../components/banner-block/banner-block'
import AOS from 'aos';

const DeliveryMenu = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
        <>
    <BannerBlock title={' Меню доставки'} sub={'Доставим быстро'}/>

            <div className="wrap delivery"

            >
                <h2 className='title'
                 
                > Меню доставки</h2>
                <ul className='cards_block'>
                    <li className='cards'>
                        <Link to={'/category/1'} className='menu' >
                            <div className="menu-items">
                                <img src={imgimg}  alt='menyu'/>
                                <p className="item_title">
                                    Холодные закуски
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className='cards'>
                        <Link to={'/category/1'} className='menu' >
                            <div className="menu-items">
                                <img src={imgimg}  alt='menyu'/>
                                <p className="item_title">
                                    Холодные закуски
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className='cards'>
                        <Link to={'/category/1'} className='menu' >
                            <div className="menu-items">
                                <img src={imgimg}  alt='menyu'/>
                                <p className="item_title">
                                    Холодные закуски
                                </p>
                            </div>
                        </Link>
                    </li>   
                    <li className='cards'>
                        <Link to={'/category/1'} className='menu' >
                            <div className="menu-items">
                                <img src={imgimg}  alt='menyu'/>
                                <p className="item_title">
                                    Холодные закуски
                                </p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        
        </>
    )
}

export default DeliveryMenu