import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules'; 
import './Swiper.css';
import '../../../App.css'
import '../../../assets/css/Responsive.css'

const HomeSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Parallax]}
      className="mySwiper2"
      parallax={true}
      speed={1200}
      effect="slide"
      direction="vertical"
      autoplay={{ delay: 3000 }} 
      navigation={{
        nextEl: '.upk-button-next',
        prevEl: '.upk-button-prev',
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => (
          `<span class="${className} swiper-pagination-bullet--svg-animation">
            <svg width="28" height="28" viewBox="0 0 28 28">
              <circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle>
              <circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle>
            </svg>
          </span>`
        ),
      }}
    >

    <SwiperSlide>
        <div className="upk-salf-item swiper-slide">
          <div className="upk-salf-image-wrap">
            <img className="upk-xanc-img" src="https://picsum.photos/id/1011/1200/800" alt="Interior" />
          </div>
          <div className="upk-salf-content-wrap">
            <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
              We help you make modern interior
            </h3>
            <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">
              We will help you create an elegant and luxurious interior designed by a professional interior designer.
            </div>
            <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
              <a className="link link--arrowed" href="#">Read More
                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                  <g fill="none" stroke="#ff215a" strokeWidth="1.5" strokeLinejoin="round" strokeMiterlimit="10">
                    <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                    <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="upk-salf-item swiper-slide">
        <div className="upk-salf-image-wrap">
            <img className="upk-xanc-img" src="https://picsum.photos/id/167/1200/800" alt="Something"/>
        </div>
        <div className="upk-salf-content-wrap">
            <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                we help you make modern interior
            </h3>
            <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                <a className="link link--arrowed" href="#">read more
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                        <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                        <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="upk-salf-item swiper-slide">
        <div className="upk-salf-image-wrap">
            <img className="upk-xanc-img" src="https://picsum.photos/id/167/1200/800" alt="Something"/>
        </div>
        <div className="upk-salf-content-wrap">
            <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                we help you make modern interior
            </h3>
            <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                <a className="link link--arrowed" href="#">read more
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                        <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                        <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="upk-salf-item swiper-slide">
            <div className="upk-salf-image-wrap">
                <img className="upk-xanc-img" src="https://picsum.photos/id/201/1200/800" alt="Something"/>
            </div>
            <div className="upk-salf-content-wrap">
                <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                    we help you make modern interior
                </h3>
                <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                    <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                    <a className="link link--arrowed" href="#">read more
                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                            <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="upk-salf-item swiper-slide">
        <div className="upk-salf-image-wrap">
            <img className="upk-xanc-img" src="https://picsum.photos/id/1026/1200/800" alt="Something"/>
        </div>
        <div className="upk-salf-content-wrap">
            <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                we help you make modern interior
            </h3>
            <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.</div>

                <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                <a className="link link--arrowed" href="#">read more
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                        <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                        <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </SwiperSlide>

    </Swiper>
  );
};

export default HomeSwiper;
