'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './HeroImg.module.css'

export const HeroImg = () => {
	return (
		<Image
			src='/wrhf2.png'
			width={1450}
			height={2088}
			alt='hero'
			priority
			className={styles.hero_img}
		/>
	)
}
