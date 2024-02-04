import React , {useEffect} from 'react'

import './bb.scss'
import AOS from 'aos';

const BannerBlock = ({title , sub}) => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
        <>
        <div className="banner">
            <div className="wrap" 
            data-aos="fade-up"
            data-aos-duration="1500"
            >
                <h1 className="title">
                    {title}
                </h1>
                <p>
                    {sub}
                </p>
            </div>
        </div>
        </>
    )
}

export default BannerBlock