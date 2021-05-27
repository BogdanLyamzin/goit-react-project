import { NavLink } from "react-router-dom";

import {v4} from 'uuid'

import styles from "./SiteNavItem.module.scss"

const SiteNavItem = ({page, to, toggleBurger}) => (
    <NavLink exact to={to} className={styles.link} key={v4()} activeClassName={styles.active} onClick={toggleBurger}>{page}</NavLink>
);

export default SiteNavItem;