'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { NavLink } from '../navLink'
import { NavIcon } from '../navMobile/navIcon'
import { NavMenu } from './navMenu'
import { LogoMain } from '@/components/media'
import styles from './NavMain.module.css'

export const NavMain = () => {
	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScroll(true)
			} else {
				setScroll(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<nav className={scroll ? styles.nav_scroll : ''}>
			<div className={styles.nav_container}>
				<div className={styles.nav_logo}>
					<NavLink href='/'>
						<Image
							src={LogoMain}
							loading='eager'
							priority
							alt='lp-Logo'
							width={232}
							height={325}
							className={styles.nav_logo}
						/>
					</NavLink>
				</div>
				<NavMenu scroll={scroll} />
				<NavIcon />
			</div>
		</nav>
	)
}
