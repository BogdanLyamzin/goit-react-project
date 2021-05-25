import React from 'react';
// import GiftBox from '../../../../../public/images/GiftBox.svg';
// import Selected from '../../../../../public/images/Selected.svg';
import styles from './AwardsCard.module.scss';

const AwardsCard = () => {
    return (
       <div className={styles.container_title}>
            <div className={styles.container_awards}>
                {/* <GiftBox/> */}
             <h2 className={styles.title}>Мои призы</h2>
            </div> 
            <ul className={styles.list}>
                 <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                            <span className={styles.price}>20 баллов</span>
                            </div>
                        {/* <Selected/> */}
                    </div>
                </li>   
                  <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                            <span className={styles.price}>20 баллов</span>
                            </div>
                        {/* <Selected/> */}
                    </div>
                </li>  
                <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                            <span className={styles.price}>20 баллов</span>
                            </div>
                        {/* <Selected/> */}
                    </div>
                </li>  
                  <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                            <span className={styles.price}>20 баллов</span>
                            </div>
                        {/* <Selected/> */}
                    </div>
                </li>  
            </ul>
         </div> 
    )
};

export default AwardsCard;
