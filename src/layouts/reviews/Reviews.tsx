import React from 'react';
import s from './reviews.module.scss'
import Slider from "../../components/Slider/Slider";

function Reviews() {
    return (
        <section className={s.wrapper}>
            <div className={s.container}>
                <h3>Отзывы</h3>
                <Slider/>
            </div>
        </section>
    );
}

export default Reviews;