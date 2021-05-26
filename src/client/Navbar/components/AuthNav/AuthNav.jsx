import { NavLink } from "react-router-dom";

import styles from './AuthNav.module.scss'

const AuthNav = () => (
    <div className={styles.navigation}>
        <NavLink to='/login' className={styles.link} activeClassName={styles.active}>Авторизоваться</NavLink>
        <NavLink to='/contacts'className={styles.link} activeClassName={styles.active}>Контакты</NavLink>
    </div>
);

export default AuthNav;