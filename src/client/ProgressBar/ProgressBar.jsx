import { useState, useEffect } from "react"
import { useSelector, shallowEqual } from "react-redux"
import { getTasks } from "../../redux/tasks/tasks-selectors"

import styles from "./ProgressBar.module.scss"

const ProgressBar = () => {
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)
  const tasks = useSelector(getTasks, shallowEqual)
  const days = tasks.map((task) => task.days)
  useEffect(() => {
    const daysFilter = days.filter((item) => item.isActive === true).length
    const total = tasks.reduce((task) => task.reward * daysFilter)
    setTotal(total)
    const completedDaysFilter = days.filter(
      (item) => item.isCompleted === true
    ).length
    const score = tasks.reduce((task) => task.reward * completedDaysFilter)
    setScore(score)
  }, [days, tasks])

  return (
    <div className={styles.progressBar}>
      <p className={styles.pointsMobile}>Заработано баллов:</p>
      <p className={styles.points}>
        Заработано баллов за эту неделю:
        <span className={styles.result}>{score}</span>
      </p>
      <p className={styles.points}>
        Запланировано баллов на эту неделю:
        <span className={styles.result}>{total}</span>
      </p>
      <span className={styles.numberRate}>
        {score} <span className={styles.number}>/ {total}</span>
      </span>
      <progress
        id="my-progress"
        className={styles.rateLine}
        value={score}
        max={total}
      ></progress>
    </div>
  )
}

export default ProgressBar
