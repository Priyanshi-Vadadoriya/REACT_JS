import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
        
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Slider1() {
  return (
    <>
        <Swiper navigation={true} loop={true} autoplay={{delay:5000, disableOnInteraction:false}} modules={[Autoplay, Navigation]} className="mySwiper slider1">
            <SwiperSlide>
                <div className='overlay'>
                    <div className="content-1">
                        <p>F R E S H &nbsp; & &nbsp; O R G A N I C</p>
                        <h2>Delicious Seasonal <br/> Fruits</h2>
                        <div className="hero-btns">
                            <Link to='/shop' className="boxed-btn">Fruit Collection</Link>
                            <Link to='/contact' className="bordered-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <img src="assets/img/hero-bg-1.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <div className='overlay'>
                    <div className="content-2">
                        <p>F R E S H &nbsp; E V E R Y D A Y</p>
                        <h2>100% Organic Collection</h2>
                        <div className="hero-btns">
                            <Link to='/shop' className="boxed-btn">Visit Shop</Link>
                            <Link to='/contact' className="bordered-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <img src="assets/img/hero-bg-2.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <div className='overlay'>
                    <div className="content-3">
                        <p>M E G A &nbsp; S A L E &nbsp; G O I N G &nbsp; O N !</p>
                        <h2>Get December Discount</h2>
                        <div className="hero-btns">
                            <Link to='/shop' className="boxed-btn">Visit Shop</Link>
                            <Link to='/contact' className="bordered-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <img src="assets/img/hero-bg-3.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <div className='overlay'>
                    <div className="content-1">
                        <p>F R E S H &nbsp; & &nbsp; O R G A N I C</p>
                        <h2>Delicious Seasonal <br/> Fruits</h2>
                        <div className="hero-btns">
                            <Link to='/shop' className="boxed-btn">Fruit Collection</Link>
                            <Link to='/contact' className="bordered-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <img src="assets/img/hero-bg-4.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <div className='overlay'>
                    <div className="content-2">
                        <p>F R E S H &nbsp; E V E R Y D A Y</p>
                        <h2>100% Organic Collection</h2>
                        <div className="hero-btns">
                            <Link to='/shop' className="boxed-btn">Visit Shop</Link>
                            <Link to='/contact' className="bordered-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
                    
                <img src="assets/img/hero-bg-5.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <div className='overlay'>
                    <div className="content-3">
                        <p>M E G A &nbsp; S A L E &nbsp; G O I N G &nbsp; O N !</p>
                        <h2>Get December Discount</h2>
                        <div className="hero-btns">
                            <Link to='/shop' className="boxed-btn">Visit Shop</Link>
                            <Link to='/contact' className="bordered-btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
                <img src="assets/img/hero-bg-6.jpg" alt=""/>
            </SwiperSlide>
            
        </Swiper>
    </>
  );
}

