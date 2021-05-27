import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../images/Logo.svg'

import styles from './Logo.module.scss'

function Logo() {
    return (
        <NavLink to='/'className={styles.logoLink} >
            <p className={styles.logo}>KidsLike</p>
            <LogoIcon className={styles.logoIcon} />
        </NavLink>
    )
}

export default Logo;