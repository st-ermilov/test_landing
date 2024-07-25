import React from 'react';
import Logo from "../../components/Logo/Logo";
import s from './desctop_header.module.scss'
import {useAppSelector} from "../../redux/reduxHooks";
import {Link} from "react-scroll";
import {anchorLinks} from "../../layouts/menu_mobile/MenuMobile";
function DesctopHeader() {
    const open = useAppSelector(state => state.btns.openMenu)
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <Logo/>
                <div className={`${s.container} ${open ? s.active : ''}`}>
                    {anchorLinks.map((item, index) => (
                        <Link key={item.id} to={`${item.id}`} spy={true} smooth={true}
                              offset={-10}
                              duration={800}>
                            <p>{item.text}</p>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default DesctopHeader;