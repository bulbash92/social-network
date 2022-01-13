import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./Header.module.css";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import Login from "../Login/Login";

function Header() {

    const login = useSelector<AppStateType, string | null>(state => state.auth.login)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    return (

        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img src='https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'/>
                <h2>MySocial</h2>
                <div className={styles.loginBlock}>
                    {isAuth ? login : <NavLink to={'/login'}/>}
                </div>
            </div>

        </header>
    )
}

export default Header;