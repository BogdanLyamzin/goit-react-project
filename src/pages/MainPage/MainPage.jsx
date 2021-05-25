import React from "react"

import styles from "./MainPage.module.scss"

// import planer from "./images/planer-2.jpeg"
// import Group from "./images/Group.svg"

import Sidebar from "./components/Sidebar"
// import ButtonMain from "./components/ButtonMain"
import FooterMobile from "./components/FooterMobile/FooterMobile"
import MyTask from "./components/MyTask/MyTask"
import ContentOfMainPage from "./components/ContentOfMainPage/ContentOfMainPage"
import DaysOfTheWeekMini from "./components/DaysOfTheWeekMini/DaysOfTheWeekMini"
import InfoProgressLarge from "./components/InfoProgressLarge"
import WeekDaysPeriodDate from "./components/WeekDaysPeriodDate/WeekDaysPeriodDate"
// import ScaleProgress from "./components/ScaleProgress/ScaleProgress"

function MainPage() {
	return (
		<div className={styles.mainContainer}>
			<Sidebar />

			<div className={styles.content}>
				<div className={styles.listDaysContainer}>
					<DaysOfTheWeekMini />

					<WeekDaysPeriodDate />
				</div>

				<InfoProgressLarge />

				<MyTask />

				<ContentOfMainPage />

				<FooterMobile />
			</div>
		</div>
	)

