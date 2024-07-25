import React from 'react';
import Logo from "../../components/Logo/Logo";
import s from './header.module.scss'
import MenuBurger from "../../components/MenuBurger/MenuBurger";
import {useAppSelector} from "../../redux/reduxHooks";
function Header() {
    const open = useAppSelector(state => state.btns.openMenu)
    return (
        <div className={`${s.header} ${open ? s.active : ''}`}>
            <Logo/>
            <MenuBurger />
        </div>
    );
}

export default Header;