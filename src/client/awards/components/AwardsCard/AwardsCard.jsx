import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import {getAwards} from '../../../../redux/awards/awards-selectors';
import AwardsTitle from '../AwardsTitle';
import Button from '../../../../shared/components/Button';
import CheckboxToggle from '../../../../shared/components/CheckboxToggle';
import styles from './AwardsCard.module.scss';

const AwardsCard = () => {
    const awards = useSelector(state => getAwards(state), shallowEqual);

    const awardsList = awards.map(({ id, title, price, imageUrl }) =>
        <li key={id} className={styles.item}>
            <img src={imageUrl} alt={title} className={styles.image}/>
            <div className={styles.container_card}>
            <div className={styles.container_info}>
            <h3 className={styles.gift_name}>{title}</h3>
            <span className={styles.price}>{price} баллов</span>
            </div>
            <div className={styles.container_checkboxtoggle}> <CheckboxToggle className={styles.checkbox_toggle}/></div> 
            </div>
            </li> )
    return (
        <div className={styles.container}>
            <div className={styles.container_awards}>
            <div className={styles.container_main}>
             <AwardsTitle/>
                {/* <div className={styles.rating}>
                    <p className={styles.text}>Заработано баллов за эту неделю: <span className={styles.number_bold}>8</span></p>
                    <p className={styles.text}>Запланированно баллов на эту неделю: <span className={styles.number_bold}>16</span></p>
                    <span className={styles.number_rate}>8 <span className={styles.number}>/ 16</span></span> 
                    <progress className={styles.rate_line} value='0' max='100'></progress>
                </div> */}
            </div>
            <ul className={styles.list}>
                 {awardsList}
            </ul>
            </div> 
         <Button className={styles.button_confirm}> Подтвердить </Button>   
        </div>
    )
};

export default AwardsCard;
