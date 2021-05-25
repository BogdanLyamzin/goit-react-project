import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
 

import Navbar from '../client/Navbar/components/Navbar'

import styles from './Header.module.scss'

const Header = ({isLoggedIn, scoreBalance = 0 }) => (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.leftSide}>
            <NavLink to='/' className={styles.logo}>LOGO</NavLink>
            <div className={styles.scoreBalance} >
                <p className={styles.text}>Баланс<br/> баллов:</p>
                <span className={styles.score} >{scoreBalance}</span>
            </div>
            </div>
        <div className={styles.navigation}>
        <Navbar />
        { isLoggedIn &&  
        <>     
        <h2>User</h2>
        <button>logout</button>
        </>
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