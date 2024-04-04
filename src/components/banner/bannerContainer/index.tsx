import React from 'react'
import { WrapperProps } from '@/types/globalTypes'
import styles from './BannerContainer.module.css'

export const BannerContainer: React.FC<WrapperProps> = ({ children }) => {
	return <section className={styles.banner_container}>{children}</section>
}
