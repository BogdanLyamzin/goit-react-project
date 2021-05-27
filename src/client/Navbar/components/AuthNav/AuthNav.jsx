import { NavLink } from "react-router-dom";

import styles from './AuthNav.module.scss'

const AuthNav = ({toggleBurger}) => (
    <div className={styles.navigation}>
        <NavLink to='/login' className={styles.link} activeClassName={styles.active} onClick={toggleBurger}>Авторизоваться</NavLink>
        <NavLink to='/contacts'className={styles.link} activeClassName={styles.active} onClick={toggleBurger}>Контакты</NavLink>
    </div>
);

export default AuthNav;