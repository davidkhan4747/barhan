import React , {useRef} from 'react'
import './home-slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
const HomeSlider = () => {
SwiperCore.use([Pagination, Navigation]); 
    
    const navigationPrevRefS = useRef(null);
    const navigationNextRefS = useRef(null);
  return (
    <>
        <div className="wrap">
            <div className="slider_btns">
                <div className="prev"  ref={navigationPrevRefS}>
                            <GrPrevious />
                </div>
                <div className="next" ref={navigationNextRefS}>
                    <GrNext />
                </div>
            </div>
                
                <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRefS.current;
                    swiper.params.navigation.nextEl = navigationNextRefS.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                navigation={{
                    prevEl: navigationPrevRefS.current,
                    nextEl: navigationNextRefS.current,
                }}
                >

                <SwiperSlide>
                    <div className="slider__block">
                        <div className="slider__body">
                            <div className='sldier__content'>
                                <h2>Lorem, ipsum.</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='slider__img'>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <div className="slider__body">
                            <div className='sldier__content'>
                                <h2>Lorem, ipsum.</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className='slider__img'>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            
            </Swiper>
          
        </div>
    </>
    
)

}

export default HomeSlider