import React from 'react'
import './contacts.scss'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePhoneFlip ,FaLocationDot ,FaVk    } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import BannerBlock from '../banner-block/banner-block';
const Contacts = () => {
  return (
    <>
    <BannerBlock title={'Контакты'} sub={'Свяжитесь с нами удобным способом'}/>
    <div className='wrap'>
        <div className=' contacts-block'>
        <div className="contacts-items">
                
            <div className="map">
                <div  style={{position:'relative',overflow:'hidden'}}><a href="https://yandex.uz/maps/org/barkhan/1234421989/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fonSize:'12px',position:'absolute',top:'0px'}}>Бархан</a><iframe src="https://yandex.uz/map-widget/v1/?ll=37.413460%2C54.918381&mode=search&oid=1234421989&ol=biz&z=17.75" width="560" height="400" frameborder="1" allowfullscreen="true" style={{position:'relative'}}></iframe></div>
            </div>
            <div>
                <h2>Наши контакты</h2>
                <a href="tel:+7 (4967) 76-46-46">
                    <p className='cont-text'>
                        <FaSquarePhoneFlip/>
                        +7 (4967) 76-46-46
                        
                    </p >
                </a>
                <a href={'https://vk.com/barhansu'} target='_blank'>
                    <p className='cont-text'>
                        <FaVk />
                        Мы в контакте
                    </p >
                </a>
                <a target='_blank' href="https://www.instagram.com/barhan.serpukhov?igsh=ZmdnOTBpcWR3ZHB5">
                    <p className='cont-text'>
                        <FaInstagramSquare />
                        Наш инстаграм
                    </p >
                </a>
                <a href="https://yandex.uz/maps/org/barkhan/1234421989/?ll=37.413955%2C54.918265&z=18" target='_blank'>
                    <p className='cont-text'>
                        <FaLocationDot />
                        ул. Чехова, 14/16
                    </p >
                </a>
                </div>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Contacts