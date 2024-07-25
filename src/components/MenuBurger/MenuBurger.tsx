import React from 'react';
import s from './menu_burger.module.scss'
import {useAppDispatch, useAppSelector} from "../../redux/reduxHooks";
import {setOpen} from "../../redux/btnsSlice";

function MenuBurger() {
    const open = useAppSelector(state => state.btns.openMenu)
    const dispatch = useAppDispatch()

    function toggleMenu() {
        dispatch(setOpen(!open))
    }

    return (
        <div className={s.menu_icon}>
            <input className={s.menu_icon__checkbox} type={'checkbox'} checked={open} onChange={toggleMenu} />
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
)
    ;
}

export default MenuBurger;