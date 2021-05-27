import { useState } from "react";
import { useSelector } from "react-redux";

import SiteNav from '../SiteNav'
import AuthNav from '../AuthNav'
import { ReactComponent as Burger } from './icons/menu.svg'
import { ReactComponent as Close } from './icons/close.svg'
import {getIsAuthenticated} from '../../../../redux/auth/selectors'

import styles from './Navbar.module.scss'

function Navbar() {
    const [burger, setBurger] = useState(false)
    const isAuthorized = useSelector(getIsAuthenticated)

    const toggleBurger = () => {
        setBurger(prevState => !prevState)
    }

    return (
    <>
    {burger &&  <div className={styles.backdrop} onClick={toggleBurger} ></div>}
    <div className={styles.wrapper}>
            <span className={ isAuthorized ? styles.burger : styles.burgerUnAuth}><Burger onClick={toggleBurger} /></span>
            <div className={`${burger ? styles.navigation : `${styles.navigation} ${styles.burgerClose}`} ${!isAuthorized && styles.unAuth}`}>
            { isAuthorized && <div className={styles.user}>
                <p>USER</p>
                <button>Logout</button>
            </div>}
         <span className={styles.close}><Close onClick={toggleBurger}/></span>
        { isAuthorized ?
            <SiteNav toggleBurger={toggleBurger}/> : <AuthNav toggleBurger={toggleBurger}/>}
        </div>
    </div>
    </>
    )
}  

export default Navbar;