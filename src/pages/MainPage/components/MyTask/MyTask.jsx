import React from "react"
import styles from "./MyTask.module.scss"

function MyTask() {
	return (
		<div className={styles.myTaskContainer}>
			<p className={styles.myTask}>Мои задачи: </p>
			<h3 className={styles.date}>Среда, 23-12-2020</h3>
		</div>
	)
}

export default MyTask
