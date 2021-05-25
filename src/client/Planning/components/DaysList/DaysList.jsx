import FormCheckbox from '../../../../shared/components/FormCheckbox'
import styles from './DaysList.module.scss'

const DaysList=() =>{
const dayList=[
    { "days": "Пн"},
    { "days": "Вт" },
    { "days": "Ср"},
    { "days": "Чт" },
    { "days": "Пт" },
    { "days": "Сб" },
    { "days": "Вс"}
  ]

  const dayWeek=dayList.map(({days})=> <FormCheckbox label={days}/>)

    return (
        <div className={styles.checkboxList}>
            {dayWeek}
        </div>
        )
};

export default DaysList;
