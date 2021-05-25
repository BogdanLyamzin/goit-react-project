import React from "react"

import styles from "./DaysOfTheWeekMini.module.scss"

function DaysOfTheWeekMini() {
	return (
		<ul className={styles.listDays}>
			<li>
				<span>Пн</span>
			</li>
			<li>
				<span>Вт</span>
			</li>
			<li>
				<span>Ср</span>
			</li>
			<li>
				<span>Чт</span>
			</li>
			<li>
				<span>Пт</span>
			</li>
			<li>
				<span>Сб</span>
			</li>
			<li>
				<span>Вс</span>
			</li>
		</ul>
	)
}

export default DaysOfTheWeekMini
