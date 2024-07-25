import React from 'react';
import {NavLink} from "react-router-dom";
import {Link} from 'react-scroll'
import s from './menu_mobile.module.scss'
import {useAppDispatch, useAppSelector} from '../../redux/reduxHooks';
import arrow from '../../assets/arrow-right.svg'
import {setOpen} from "../../redux/btnsSlice";

export const anchorLinks = [
    {id: 'how_it_work', text: 'Как это работает'},
    {id: 'third_block', text: '3-й блок'},
    {id: 'ans_que', text: 'Вопросы и ответы'},
    {id: 'form', text: 'Форма'}]

function MenuMobile() {
    const open = useAppSelector(state => state.btns.openMenu)
    const dispatch = useAppDispatch()


    return (
        <div className={`${s.container} ${open ? s.active : ''}`}>
            {anchorLinks.map((item, index) => (
                <Link key={item.id} to={`${item.id}`} spy={true} smooth={true}
                      offset={-10}
                      duration={800}
                         onClick={() => {
                    dispatch(setOpen(!open))
                }}>
                    <p>{item.text}</p>
                    <img src={arrow} alt="arrow-right"/>
                </Link>
            ))}
        </div>
    );
}

export default MenuMobile;