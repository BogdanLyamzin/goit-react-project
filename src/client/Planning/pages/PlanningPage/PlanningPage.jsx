
import CurrentPlanningWeek from '../../components/CurrentPlanningWeek'
import PlannigPoints from '../../components/PlannigPoints'
import TasksList from '../../../Tasks/components/TasksList'
// import PlanningTask from '../../components/PlanningTask'
import NewTask from '../../../Tasks/components/NewTask'
import img from '../../Rectangle 25.jpg'

import styles from './PlanningPage.module.scss'

    const tasks = [{ imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }, { imageUrl: img, reward: 5 }]

const PlanningPage = () => {
console.log()
        return (
            <section className={styles.planningPage}>
                <div className={styles.container}>
                    <div className={styles.planningPageContainer}>
                        <CurrentPlanningWeek />
                        <div className={styles.planningPageWrapper}>
                            <PlannigPoints />
                            <NewTask />
                        </div>
                        
                    </div>
                    <TasksList tasks={tasks}/>
                </div>
                <div className={styles.planningPageWrapperMobile}>
                    <PlannigPoints />
                    <NewTask />
                </div>
            </section>
        )
};

export default PlanningPage;


//при клике на кнопку '+' всплывает список с чекбоксами выбора дня недели и меняется текст кнопки на ок;
//при нажатии на чекбокс выбирается день недели;
//считываеются балы и добавляются в planning-points
//список скрывается при нажатии на кнопку(ок меняется на +)


