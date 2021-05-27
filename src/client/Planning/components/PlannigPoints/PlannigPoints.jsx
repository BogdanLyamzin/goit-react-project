import { useState } from 'react'

import styles from './PlannigPoints.module.scss'

const PlannigPoints = () => {

    const [points, setPoints] = useState(0)
    
    return (
        <>
            <p className={styles.planningPointsText}>Определены задач на <span className={styles.planningPointsNumber}>{points}</span> баллов</p>
            
        </>
    )
};

export default PlannigPoints;
