import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper loop={true} autoplay={{delay:5000, disableOnInteraction:false}} modules={[Autoplay]} className="mySwiper">
            <SwiperSlide>
                <div class="client-avater mt-100">
                <img src="assets/img/avaters/avatar1.png" alt=""/>
                </div>
                <div class="client-meta swiper-mb">
                <h3>Saira Hakim <span>Local shop owner</span></h3>
                    <p class="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                    </p>
                    <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="client-avater mt-100">
                    <img src="assets/img/avaters/avatar2.png" alt=""/>
                </div>
                <div class="client-meta swiper-mb">
                    <h3>David Niph <span>Local shop owner</span></h3>
                    <p class="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                    </p>
                    <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div class="client-avater mt-100">
                    <img src="assets/img/avaters/avatar3.png" alt=""/>
                </div>
                <div class="client-meta swiper-mb">
                    <h3>Jacob Sikim <span>Local shop owner</span></h3>
                        <p class="testimonial-body">
                            " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
                        </p>
                    <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                    </div>
                </div>
            </SwiperSlide>
      </Swiper>
    </>
  );
}
