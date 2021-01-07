import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './app.css';

SwiperCore.use([Navigation, Pagination]);

const App = () => {
    const slidesData = [
        { name: 'HTML', description: 'Something about HTML', id: 1 },
        { name: 'CSS', description: 'Something about CSS', id: 2 },
        { name: 'JavaScript', description: 'Something about JavaScript', id: 3 },
        { name: 'React', description: 'Something about React', id: 4 }
    ];
    const slides = slidesData.map((item) => {
        return (
            <SwiperSlide key={item.id}>
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            </SwiperSlide>
        )
    });

    return (
        <Swiper
            navigation
            pagination
        >
            {slides}
        </Swiper>
    )
};

export default App;