import { shallowEqual, useSelector } from 'react-redux';

import Navbar from '../client/navbar/components/Navbar'
import Logo from '../shared/components/Logo'
import {getIsAuthenticated} from '../redux/auth/selectors'

import styles from './Header.module.scss'


const Header = ({scoreBalance = 0 }) => {
  const isAuthorized = useSelector(getIsAuthenticated, shallowEqual)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.leftSide}>
          <Logo />
          {isAuthorized &&
          <div className={styles.scoreBalance} >
            <p className={styles.text}>Баланс<br /> баллов:</p>
            <span className={styles.score} >{scoreBalance}</span>
          </div>
          } 
        </div>
        <div className={styles.rightSide}>
          <Navbar />
          {isAuthorized &&
            <div className={styles.userContainer}>
              <h2>User</h2>
              <button>logout</button>
            </div>
          }
        </div>
      </div>
    </header>
  );
}
export default Header;