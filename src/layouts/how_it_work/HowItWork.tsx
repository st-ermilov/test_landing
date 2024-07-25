import React from 'react';
import sprite from '../../assets/how_it_work_sprite.svg'
import s from './how_it_work.module.scss'

const points = [
    {id: 'wait', title: 'Прочитай задание внимательно', text: 'Думаю у тебя не займет это больше двух-трех минут'},
    {
        id: 'delivery',
        title: 'Изучи весь макет заранее',
        text: 'Подумай как это будет работать на разных разрешениях и при скролле'
    },
    {id: 'secure', title: 'Сделай хорошо', text: 'Чтобы мы могли тебе доверить подобные задачи в будущем'},
    {
        id: 'money_bags',
        title: 'Получи предложение',
        text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))'
    }
]

function HowItWork() {
    return (
        <div className={s.container} id={'how_it_work'}>
            <h3 className={s.title}>Как это работает</h3>
            <div className={s.points_container}>
            {points.map((item) => (
                <section key={item.id} className={s.point}>
                    <div className={s.svg_img}>
                        <svg>
                            <use xlinkHref={`${sprite}#${item.id}`}/>
                        </svg>
                    </div>
                    <div className={s.text_content}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                </section>
            ))}
            </div>
        </div>
    );
}

export default HowItWork;