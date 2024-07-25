import React from 'react';
import s from './question_card.module.scss'
import {useAppSelector} from "../../redux/reduxHooks";
import close from '../../assets/plus_close.svg'


type QuestionCardPropsType = {
    id: string
    question: string
    answer: string
    toggleAnswer: (id: string) => void
}

function QuestionCard(props: QuestionCardPropsType) {
    const openAnswer = useAppSelector(state => state.btns.openAnswer)

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.question} onClick={() => props.toggleAnswer(props.id)}>
                    <h2>{props.question}</h2>
                    <img src={close} className={`${s.close} ${openAnswer.includes(props.id) ? s.close_btn : ''}`}
                         alt={'close button'}/>
                </div>
                <div className={`${s.answer} ${openAnswer.includes(props.id) ? s.active : ''}`}>{props.answer}</div>
            </div>
        </div>
    )
}

export default QuestionCard;