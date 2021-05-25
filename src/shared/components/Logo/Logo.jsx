import { Link } from 'react-router-dom'
import { ReactComponent as LogoSite } from '../../../images/Logo.svg';

import styles from './Logo.module.scss'

const Logo = () => {
    return (
            <Link to='/' className={styles.logo}>
                <span className={styles.text}>KidsLike</span>
                <LogoSite className={styles.img}/>
            </Link>
    )
}

export default Logo