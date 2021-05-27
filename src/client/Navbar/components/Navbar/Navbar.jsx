import { useState } from "react";
import { useSelector, useStore } from "react-redux";

import SiteNav from '../SiteNav'
import AuthNav from '../AuthNav'
import { ReactComponent as Burger } from './icons/menu.svg'
import {ReactComponent as Close } from './icons/close.svg'

import styles from './Navbar.module.scss'

function Navbar({ isLoggedIn = true}) {
    const [burger, setBurger] = useState(false)

    const toggleBurger = () => {
        setBurger(prevState => !prevState)
    }

    return (
    <>
    {burger &&  <div className={styles.backdrop} onClick={toggleBurger} ></div>}
    <div className={styles.wrapper}>
            <span className={ isLoggedIn ? styles.burger : styles.burgerUnAuth}><Burger onClick={toggleBurger} /></span>
            <div className={`${burger ? styles.navigation : `${styles.navigation} ${styles.burgerClose}`} ${!isLoggedIn && styles.unAuth}`}>
            { isLoggedIn && <div className={styles.user}>
                <p>USER</p>
                <button>Logout</button>
            </div>}
         <span className={styles.close}><Close onClick={toggleBurger}/></span>
        { isLoggedIn ?
            <SiteNav toggleBurger={toggleBurger}/> : <AuthNav toggleBurger={toggleBurger}/>}
        </div>
    </div>
    </>
    )
}  

export default Navbar;