import React from 'react'
import { WrapperProps } from '@/types/globalTypes'
import styles from './BannerCarousel.module.css'

export const BannerCarousel: React.FC<WrapperProps> = ({ children }) => {
	return (
		<section className={styles.banner_container}>
			<div className={styles.banner_content}>{children}</div>
		</section>
	)
}
