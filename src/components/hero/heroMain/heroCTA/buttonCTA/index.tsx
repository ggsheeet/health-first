import React from 'react'
import Link from 'next/link'
import styles from './ButtonCTA.module.css'

export const AppointmentButton = () => {
	return (
		<Link
			href='https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_'
			target='_blank'
			rel='noopener noreferrer'
			className={styles.button_cta}
		>
			Agenda tu consulta
		</Link>
	)
}
