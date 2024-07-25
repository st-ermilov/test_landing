import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import { Swiper as SwiperClass } from 'swiper/types';
import {Navigation, Pagination, FreeMode, A11y} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import s from './slider.module.scss'
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import ava from '../../assets/avatar_review.jpeg'
import {useMediaQuery} from "react-responsive";
import './swiper.css'
import prevBtn from '../../assets/prevBtn.svg'
import nextBtn from '../../assets/nextBtn.svg'

const reviews = [
    {
        id: '1',
        avatar: ava,
        name: 'Константинов Михаил Павлович',
        city: 'Санкт-Петербург',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет ' +
            'широкие возможности для ' +
            'анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы'
    },
    {
        id: '2',
        avatar: ava,
        name: 'Иван Иванов',
        city: 'Санкт-Петербург, ИП Иванов',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет ' +
            'широкие возможности ' +
            'для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, ' +
            'что активно развивающиеся страны третьего мира призваны к ответу.'
    },
    {
        id: '3',
        avatar: ava,
        name: 'Константинов Михаил Павлович',
        city: 'Санкт-Петербург',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет ' +
            'широкие возможности для ' +
            'анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы'
    },
    {
        id: '4',
        avatar: ava,
        name: 'Артем Корнилов',
        city: 'Самара',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет ' +
            'широкие возможности ' +
            'для анализа существующих паттернов поведения.'
    },
    {
        id: '5',
        avatar: ava,
        name: 'Константинов Михаил Павлович',
        city: 'Санкт-Петербург',
        review: 'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для ' +
            'анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы'
    },
]

function Slider() {
    const isDesctop = useMediaQuery({query: '(min-width: 1024px)'})

    const [swiperRef, setSwiperRef] = React.useState<SwiperClass>();


    const handlePrevious = React.useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNext = React.useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);
    return (
        <div className={s.container}>
            <img className={s.prevBtn} src={prevBtn} alt={'prev button'} onClick={handlePrevious}/>
            <Swiper
                onSwiper={setSwiperRef}
                modules={[Navigation, Pagination, FreeMode, A11y]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                pagination={{clickable: true}}
                navigation={isDesctop}
                freeMode={true}
            >
                {reviews.map((item) => (
                    <SwiperSlide key={item.id} style={{paddingBottom: '50px'}}>
                        <ReviewCard key={item.id}
                                    id={item.id}
                                    avatar={item.avatar}
                                    name={item.name}
                                    city={item.city}
                                    review={item.review}
                        />
                    </SwiperSlide>))
                }
            </Swiper>
            <img className={s.nextBtn} src={nextBtn} alt={'prev button'} onClick={handleNext}/>
        </div>
    );
}

export default Slider;
