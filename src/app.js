import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Keyboard } from 'swiper';
import 'swiper/swiper-bundle.css';
import './app.css';

SwiperCore.use([Navigation, Pagination, Autoplay, Keyboard]);

const App = () => {
    const slidesData = [
        { name: 'HTML', description: 'Something about HTML', className: 'html-slide', id: 1 },
        { name: 'CSS', description: 'Something about CSS', className: 'css-slide', id: 2 },
        { name: 'JavaScript', description: 'Something about JavaScript', className: 'javascript-slide', id: 3 },
        { name: 'React', description: 'Something about React', className: 'react-slide', id: 4 }
    ];
    const slides = slidesData.map((item) => {
        return (
            <SwiperSlide key={item.id}>
                <div className={item.className}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            </SwiperSlide>
        )
    });

    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            keyboard
        >
            {slides}
        </Swiper>
    )
};

export default App;