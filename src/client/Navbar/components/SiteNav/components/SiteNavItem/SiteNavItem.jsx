import { NavLink } from "react-router-dom";

import styles from "./SiteNavItem.module.scss"

const SiteNavItem = ({page, to}) => (
    <NavLink exact to={to} className={styles.link}  activeClassName={styles.active}>{page}</NavLink>
);

export default SiteNavItem;