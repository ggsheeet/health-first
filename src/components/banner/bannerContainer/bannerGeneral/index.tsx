import React from 'react'
import { WrapperProps } from '@/types/globalTypes'
import styles from './BannerGeneral.module.css'

export const BannerGeneral: React.FC<WrapperProps> = ({ children }) => {
	return <section className={styles.banner_container}>{children}</section>
}
