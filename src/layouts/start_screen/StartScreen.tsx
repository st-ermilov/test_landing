import React from 'react';
import s from './start_screen.module.scss'
import Header from "../header/Header";
import MenuMobile from "../../layouts/menu_mobile/MenuMobile";
import {useMediaQuery} from "react-responsive";
import DesctopHeader from "../../layouts/header_desctop/DesctopHeader";






function StartScreen() {
    const isDesctop = useMediaQuery({query: '(min-width: 1024px)'})

    return (
        <div className={s.container}>
            {isDesctop ? <DesctopHeader/> : <Header/>}
            {!isDesctop ? <MenuMobile/> : null}
            <div className={s.content}>
                <h2>Говорят, никогда не поздно сменить профессию</h2>
                <p>Сделай круто тестовое задание и у тебя получится</p>
                <button>Проще простого!</button>
            </div>
        </div>
    );
}

export default StartScreen;