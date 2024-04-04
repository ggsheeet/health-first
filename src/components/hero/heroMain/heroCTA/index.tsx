import React from 'react'
import { AppointmentButton } from './buttonCTA'
import styles from './HeroCTA.module.css'

export const HeroCTA = () => {
	return (
		<div className={styles.hero_text}>
			<h1>HEALTH FIRST | WELLNESS CENTER</h1>
			<h2>Donde tu salud es y siempre será primero</h2>
			<div className={styles.hero_button}>
				<AppointmentButton />
			</div>
		</div>
	)
}
