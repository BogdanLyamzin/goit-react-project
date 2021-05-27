import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss'
import { ReactComponent as Logo } from './images/logoFooter.svg';
// import /

const Footer = () => {
    return ( <footer className={styles.footer}>
        <div className={styles.container}>
            <p className={styles.footerWrapper}>
            <NavLink to='/' className={styles.footerLogoLink}>
                <span className={styles.footerKidslike}>KidsLike
                    <span>
                        <Logo className={styles.footerLogo} />
                    </span>
                </span>
            </NavLink>
            <span className={styles.footerText}>
                Делаем жизнь родителей и детей изи :
            </span>
            <span className={styles.footerYear}> 2020</span>
        </p>
        </div>
    </footer>
    )
};

export default Footer;