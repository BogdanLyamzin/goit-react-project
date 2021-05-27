import { useSelector } from 'react-redux';

import Navbar from '../client/navbar/components/Navbar'
import Logo from '../Logo'

import styles from './Header.module.scss'


const Header = ({isLoggedIn , scoreBalance = 0 }) => (
    <header className={styles.header}>
    <div className={`${styles.container} ${styles.headerContainer}`}>
      <div className={styles.leftSide}>
            <Logo/>
            <div className={styles.scoreBalance} >
                <p className={styles.text}>Баланс<br/> баллов:</p>
                <span className={styles.score} >{scoreBalance}</span>
            </div>
      </div>
      <div className={styles.rightSide}>
          <Navbar />
          { isLoggedIn &&  
          <div className={styles.userContainer}>     
                <h2>User</h2>
                <button>logout</button>
          </div>
          }
      </div>
    </div>
    </header>
);

export default Header;

/*<header class="header">
  <a href="" class="logo">CSS Nav</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li><a href="#work">Our Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</header>*/