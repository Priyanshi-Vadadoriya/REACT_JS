    import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import './styles.css';

// import required modules
import { Autoplay} from 'swiper/modules';

export default function Slider3() {
  return (
    <>
        <div className="logo-carousel-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logo-carousel-inner owl-carousel owl-theme owl-loaded">
                            <div className="owl-stage-outer">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{delay:5000, disableOnInteraction:false}}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    <div class="owl-item cloned" style={{ width: '50px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/2.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item cloned" style={{ width: '50px'}}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/3.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item cloned" style={{ width: '50px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/4.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item active" style={{ width: '100px' }}>
                                        <div class="single-logo-item">
                                            <SwiperSlide>
                                                <img src="assets/img/company-logos/5.png" alt=""/>
                                            </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item" style={{ width: '50px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/1.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item" style={{ width: '100px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/2.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item active" style={{ width: '100px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/3.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item cloned" style={{ width: '100px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/4.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item active" style={{ width: '100px' }}>
                                        <div class="single-logo-item">
                                            <SwiperSlide>
                                                <img src="assets/img/company-logos/5.png" alt=""/>
                                            </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item" style={{ width: '50px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/1.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item" style={{ width: '100px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/2.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item active" style={{ width: '100px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/3.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>

                                    <div class="owl-item cloned" style={{ width: '100px' }}>
                                        <div class="single-logo-item">
                                        <SwiperSlide>
                                            <img src="assets/img/company-logos/4.png" alt=""/>
                                        </SwiperSlide>
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

