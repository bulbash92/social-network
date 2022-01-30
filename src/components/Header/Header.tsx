import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import styles from "./Header.module.css";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

type PropsType = {
    onLogout: () => void
}

function Header({onLogout}: PropsType) {
    const login = useSelector<AppStateType, string | null>(state => state.auth.login)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    return (

        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img alt={'logo'} src='https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'/>
                <h2>MySocial</h2>
                <div className={styles.loginBlock}>
                    {isAuth ? login : <Redirect to={'/login'}/>}
                    {isAuth && <button onClick={onLogout}>logout</button>}
                </div>
            </div>
        </header>
    )
}

export default Header;