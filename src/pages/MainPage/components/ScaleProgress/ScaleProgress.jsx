import React from "react"

import styles from "./ScaleProgress.module.scss"

function ScaleProgress() {
	return <progress className={styles.scaleProgress} value="0" max="100"></progress>
}

export default ScaleProgress
