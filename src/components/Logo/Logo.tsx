import React from 'react';
import s from './logo.module.scss'
import {useAppSelector} from "../../redux/reduxHooks";

function Logo() {
    const open = useAppSelector(state => state.btns.openMenu)
    return (
        <div className={s.logo_container}>
            <div className={s.rounds_container}>
                <span className={s.round}></span>
                <span className={s.round2}></span>
            </div>
            <h3 className={`${s.logo_text} ${open ? s.active : ''}`}>testLab</h3>
        </div>
    );
}

export default Logo;