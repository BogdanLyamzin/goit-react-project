import React from "react"

import Group from "../../images/Group.svg"
import ScaleProgress from "../ScaleProgress/ScaleProgress"
import styles from "./FooterMobile.module.scss"

function FooterMobile() {
	return (
		<div className={styles.footerProgressContainer}>
			<p className={styles.earnedPoints}>Заработано баллов:</p>
			<div className={styles.progressBot}>
				<p className={styles.progressText}>
					<span className={styles.progressTextPoints}>0</span> / 0
				</p>
				<ScaleProgress />
			</div>
			<button className={styles.imageButton}>
				<img src={Group} alt="group" />
			</button>
		</div>
	)
}

export default FooterMobile
