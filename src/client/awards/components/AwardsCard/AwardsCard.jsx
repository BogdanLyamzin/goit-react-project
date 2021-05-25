import React from 'react';
import { ReactComponent as Gift } from '../../../../images/Gift.svg';
import Button from '../../../../shared/components/Button';
import CheckboxToggle from '../../../../shared/components/CheckboxToggle';
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
                    <span className={styles.number_rate}>8 <span className={styles.number}>/ 16</span></span> 
                    <progress className={styles.rate_line} value='0' max='100'></progress>
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
                        <div className={styles.container_checkboxtoggle}> <CheckboxToggle className={styles.checkbox_toggle}/></div> 
                    </div>
                </li>   
                  <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                                <span className={styles.price}>20 баллов</span>
                        </div>
                        <div className={styles.container_checkboxtoggle}> <CheckboxToggle className={styles.checkbox_toggle}/></div> 
                    </div>
                </li>  
                <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                                <span className={styles.price}>20 баллов</span>
                        </div>
                        <div className={styles.container_checkboxtoggle}> <CheckboxToggle className={styles.checkbox_toggle}/></div> 
                    </div>
                </li>  
                  <li className={styles.item}>
                        <img src="./images/sweet.jpeg" alt="Сладости" className={styles.image}/>
                    <div className={styles.container_card}>
                        <div className={styles.container_info}>
                        <h3 className={styles.gift_name}>Сладости</h3>
                                <span className={styles.price}>20 баллов</span>
                        </div>
                        <div className={styles.container_checkboxtoggle}> <CheckboxToggle className={styles.checkbox_toggle}/></div> 
                    </div>
                </li>  
            </ul>
            </div> 
         <Button className={styles.button_confirm}> Подтвердить </Button>   
        </div>

    )
};

export default AwardsCard;
