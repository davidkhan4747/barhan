import React , {useEffect}from 'react'
import './banner.scss'
import Logo from '../../assets/logo.png'
import { CiLocationOn } from "react-icons/ci";
import AOS from 'aos';

import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="home"  >
    <div className='wrap'>
      <div className="logo_block" data-aos="fade-up"
     data-aos-duration="1500">
        <img src={Logo} alt="logo" />
      </div>
        <div className='title_block' data-aos="fade-up"
     data-aos-duration="1000">
            <h1>Чайхана "Бархан" </h1>
            <p>
              <span className="adress">
              <CiLocationOn />
              г , Серпухов , ул Чехова 14/16
              </span>
            </p>
            <p className='home_text'>Душевный оазис в Серпухове, где вы можете насладиться прекрасным вечером в компании друзей или деловых партнёров, а также провести семейный или романтический ужин, банкет.</p>
        </div>
    </div>
</div>
  )
}

export default Banner