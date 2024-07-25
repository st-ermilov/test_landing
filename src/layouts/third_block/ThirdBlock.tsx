import React from 'react';
import s from './third_block.module.scss'
import img from '../../assets/third_block_img.png'

function ThirdBlock() {
    return (
        <section className={s.wrapper} id={'third_block'}>
            <div className={s.container}>
                <img src={img} alt="man plus car img"/>
                <div className={s.text_content}>
                    <h3>Круто, ты дошел до третьего блока</h3>
                    <p>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы
                        свыше
                        15 000 ₽.</p>
                    <p>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и
                        штрафах.</p>
                </div>
            </div>
        </section>
    );
}

export default ThirdBlock;