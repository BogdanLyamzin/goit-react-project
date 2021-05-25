import React from 'react';
import { ReactComponent as Gift } from '../../../../images/Gift.svg';
import styles from './AwardsCard.module.scss';

const AwardsCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_awards}>
            <div className={styles.container_main}>
                <div className={styles.container_title}>
                <Gift/>
                <h2 className={styles.title}>Мои призы</h2>
            </div> 
                <div className={styles.rating}>
                    <p className={styles.text}>Заработано баллов за эту неделю: <span className={styles.number_bold}>8</span></p>
                    <p className={styles.text}>Запланированно баллов на эту неделю: <span className={styles.number_bold}>16</span></p>
                    <span className={styles.number_bold}>8 <span className={styles.number}>/ 16</span></span> 
                    <span className={styles.rate_line}></span>
                </div>
            </div>
            
            <ul className={styles.list}>
                 <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                            <span className={styles.price}>20 баллов</span>
                            </div>
                    </div>
                </li>   
                  <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                            <span className={styles.price}>20 баллов</span>
                            </div>
                    </div>
                </li>  
                <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                            <span className={styles.price}>20 баллов</span>
                            </div>
                    </div>
                </li>  
                  <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                            <span className={styles.price}>20 баллов</span>
                            </div>
                    </div>
                </li>  
            </ul>
         </div>    
        </div>

    )
};

export default AwardsCard;
