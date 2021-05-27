import { useState } from 'react'

import CurrentPlanningWeek from '../../components/CurrentPlanningWeek'
import PlannigPoints from '../../components/PlannigPoints'
import TasksList from '../../../Tasks/components/TasksList'
import PlanningTask from '../../components/PlanningTask'
import img from '../../Rectangle 25.jpg'

import styles from './PlanningPage.module.scss'

    const tasks = [{ imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }]

const PlanningPage = () => {
    
    const [points, setPoints] = useState(0)
   
        return (
            <section className={styles.planningPage}>
                <div className={styles.container}>
                    <div className={styles.planningPageContainer}>
                        <CurrentPlanningWeek />
                        <PlannigPoints />
                        <PlanningTask />
                    </div>
                    <TasksList tasks={tasks}/>
                </div>
                <div className={styles.planningPageWrapper}>
                    <p className={styles.planningPointsTextMobile}>Определены задач на <span className={styles.planningPointsNumberMobile}>{points}</span> баллов</p>
                    <PlanningTask />
                </div>
            </section>
        )
};

export default PlanningPage;


//при клике на кнопку '+' всплывает список с чекбоксами выбора дня недели и меняется текст кнопки на ок;
//при нажатии на чекбокс выбирается день недели;
//считываеются балы и добавляются в planning-points
//список скрывается при нажатии на кнопку(ок меняется на +)


