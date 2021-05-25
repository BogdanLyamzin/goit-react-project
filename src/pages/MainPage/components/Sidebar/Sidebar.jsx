import React from "react"
import styles from "./Sidebar.module.scss"

function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<ul className={styles.listDaysSidebar}>
				<li>
					<span>Понедельник</span>
				</li>
				<li>
					<span>Вторник</span>
				</li>
				<li>
					<span>Среда</span>
				</li>
				<li>
					<span>Четверг</span>
				</li>
				<li>
					<span>Пятница</span>
				</li>
				<li>
					<span>Суббота</span>
				</li>
				<li>
					<span>Воскресение</span>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar
