import React from 'react';
import s from './note.module.scss'

type TopicsPropsType = {
    id: string
    title: string
    text: string
}
function Note(props: TopicsPropsType) {
    return (
        <div className={s.container}>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default Note;