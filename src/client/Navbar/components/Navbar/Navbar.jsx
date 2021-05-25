import { useSelector } from "react-redux";

import SiteNav from '../SiteNav'
import AuthNav from '../AuthNav'
import {ReactComponent as Burger } from './images/menu.svg'

import styles from './Navbar.module.scss'

const Navbar = ({ isLoggedIn = true }) => {
    return (
    <>
        <span className={styles.burger}><Burger/></span>
        { isLoggedIn ?
            <div><SiteNav/></div> : <div><AuthNav/></div>
        }
    </>
    )
}  

export default Navbar;