import React from "react"

import styles from "./InfoProgressLarge.module.scss"

import ScaleProgress from "../ScaleProgress"

function InfoPregressLarge() {
	return (
		<div className={styles.progressDesktop}>
			<div className={styles.pointsContainer}>
				<p>
					Заработано баллов за эту неделю: <span>0</span>
				</p>
				<p>
					Запланировано баллов на эту неделю: <span>0</span>
				</p>
			</div>
			<div className={styles.progressTop}>
				<p className={styles.progressText}>
					<span className={styles.progressTextPoints}>0</span> / 0
				</p>

				<ScaleProgress />
			</div>
		</div>
	)
}

export default InfoPregressLarge
