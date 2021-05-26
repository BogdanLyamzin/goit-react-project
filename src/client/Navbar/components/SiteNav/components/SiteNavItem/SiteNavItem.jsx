import { NavLink } from "react-router-dom";

import styles from "./SiteNavItem.module.scss"

const SiteNavItem = ({page, to, toggleBurger}) => (
    <NavLink exact to={to} className={styles.link}  activeClassName={styles.active} onClick={toggleBurger}>{page}</NavLink>
);

export default SiteNavItem;