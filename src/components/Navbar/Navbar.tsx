import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import {v1} from "uuid";
import {SidebarType} from "../../Redux/State";

type NavbarType = {
    sidebar: SidebarType
}

function Navbar() {
    return (
        <nav className={s.nav}>
            <ul className={s.navList}>
                <li className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>message</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
            <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friendsItems}>
                <div className={s.friendsItem}><DialogItem name={'ALex'} id={v1()}/></div>
                <div className={s.friendsItem}><DialogItem name={'ALex'} id={v1()}/></div>
                <div className={s.friendsItem}><DialogItem name={'ALex'} id={v1()}/></div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;