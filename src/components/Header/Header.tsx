import React from 'react';
import styles from "./Header.module.css";

function Header() {
    return (

        <header className={styles.header} >
            <div className={styles.wrapper}>
            <img src='https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'/>
            <h2>MySocial</h2>
            </div>
        </header>
    )
}

export default Header;