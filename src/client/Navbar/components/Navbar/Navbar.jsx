import { useSelector } from "react-redux";

import SiteNav from '../SiteNav'
import AuthNav from '../AuthNav'
import { ReactComponent as Burger } from './images/menu.svg'
import {ReactComponent as Close } from './images/close.svg'

import styles from './Navbar.module.scss'

const Navbar = ({ isLoggedIn = true }) => {
    return (
    <div className={styles.container}>
            <span className={styles.burger}><Burger /></span>
        <div className={styles.navigation}>
         <span className={styles.close}><Close/></span>
        { isLoggedIn ?
            <SiteNav/> : <AuthNav/>}
        </div>
    </div>
    )
}  

export default Navbar;