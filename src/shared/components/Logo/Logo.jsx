import { Link } from 'react-router-dom'
import { ReactComponent as LogoSite } from '../../../images/Logo.svg';

import styles from './Logo.module.scss'

const Logo = () => {
    return (
    <>
        
        <div className={styles.logoWrapper}>
            <Link to='/'>
                <span className={styles.logo}>KidsLike</span>
            </Link>
            <LogoSite className={styles.logoSVG}/>
        </div>
           
        
        </>
            

    )
}

export default Logo