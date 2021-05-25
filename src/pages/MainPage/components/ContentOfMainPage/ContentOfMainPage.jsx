import React from "react"

import styles from "./ContentOfMainPage.module.scss"
import planer from "../../images/planer-2.jpeg"

import ButtonMain from "../ButtonMain"

function ContentOfMainPage() {
	return (
		<div>
			<p className={styles.taskToday}>На этот день задач нет</p>
			<ButtonMain />
			<img className={styles.imagePlaner} src={planer} alt="planer" />
		</div>
	)
}

export default ContentOfMainPage
