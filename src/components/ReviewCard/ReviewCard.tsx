import React from 'react';
import s from './review_card.module.scss'

type ReviewCardPropsType = {
    id: string
    avatar: string
    name: string
    city: string
    review: string
}
function ReviewCard(props: ReviewCardPropsType) {
    return (
        <div className={s.container}>
            <div className={s.info}>
                <img src={props.avatar} alt="avatar"/>
                <div className={s.name}>
                    <h4>{props.name}</h4>
                    <span>{props.city}</span>
                </div>
            </div>
            <p className={s.review_text}>{props.review}</p>
        </div>
    );
}

export default ReviewCard;