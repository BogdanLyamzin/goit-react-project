import styles from './Footer.module.scss'
import {ReactComponent as Logo} from './images/logoFooter.svg';

const Footer = () => (
    <footer className={styles.footer}>
        <p className={styles.footerWrapper}><span className={styles.footerKidslike}>KidsLike <span><Logo className={styles.footerLogo} /></span></span> <span className={styles.footerText}>Делаем жизнь родителей и детей изи :) </span> <span className={styles.footerYear}> 2020</span></p>
    </footer>
);

export default Footer;