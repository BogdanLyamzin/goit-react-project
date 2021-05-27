import { useSelector, shallowEqual } from 'react-redux';
import { getAwards, getSelectedAwards } from '../../../../redux/awards/awards-selectors';

import cat from './images/cat.png';

import styles from './AwardsModal.module.scss';

const RewardModal = () => {
    const allAwards = useSelector((state => getAwards(state)), shallowEqual);
    const selectedAwardsID = useSelector((state => getSelectedAwards(state)), shallowEqual);

    const itemElements = allAwards.map(item => {
        if (selectedAwardsID.includes(item.id)) {
            return (
        <li key={item.id}>
                <div className={styles.rewardImg}>
                    <img src={item.imageUrl} alt="" className={styles.reward} />
                </div>
            <p className={styles.rewardTitle}>{item.title}</p>
        </li>)
        }
    })

    return (
        <div className={styles.modalContainer}>
            <div className={styles.imgContainer}>
                <img src={cat} alt="" className={styles.imgModal} />
            </div>
            <h2 className={styles.title}>Поздравляем! Ты получаешь:</h2>
            <ul className={styles.rewardList}>
                {itemElements}
            </ul>
        </div>
     );
}

export default RewardModal;