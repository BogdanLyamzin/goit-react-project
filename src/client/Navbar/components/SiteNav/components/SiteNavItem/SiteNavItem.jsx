import { NavLink } from "react-router-dom";

import PropTypes from 'prop-types'

import styles from "./SiteNavItem.module.scss"

const SiteNavItem = ({page, to, id, toggleBurger}) => (
    <NavLink exact to={to} className={styles.link}  activeClassName={styles.active} onClick={toggleBurger}>{page}</NavLink>
);

SiteNavItem.defaultProps = {
    page: '',
    to: '',
    id: '',
    toggleBurger: () => {}
}

SiteNavItem.propTypes = {
    page: PropTypes.string,
    to: PropTypes.string,
    id: PropTypes.string,
    toggleBurger: PropTypes.func,
}


export default SiteNavItem;