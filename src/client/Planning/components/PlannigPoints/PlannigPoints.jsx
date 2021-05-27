import { useState } from 'react'

import styles from './PlannigPoints.module.scss'

const PlannigPoints = () => {

    const [points, setPoints] = useState(0)
    
    return (
        <div className={styles.plannigPointsWrapper}>
            <p className={styles.planningPointsText}>Определены задач на</p>
            <span className={styles.planningPointsNumber}>{points}</span>
            <span className={styles.planningPoints}>баллов</span>
            
        </div>
    )
};

export default PlannigPoints;
