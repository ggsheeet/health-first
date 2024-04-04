import React from 'react'
import { usePathname } from 'next/navigation'
import { NavLink } from '../../navLink'
import { menuLinks } from '@/lib/mappedObjects'
import styles from '../NavMain.module.css'

export const NavMenu = ({ scroll }: { scroll: boolean }) => {
	const pathname = usePathname()

	return (
		<div className={styles.nav_menu}>
			{menuLinks.map((link, index) => {
				const isActive = pathname.startsWith(link.href)
				return (
					<React.Fragment key={index}>
						<NavLink
							href={link.href}
							className={
								isActive && !scroll
									? 'bg-[#FFF]/70 text-brand-choc'
									: isActive && scroll
									? 'bg-[#FFF]/80 text-brand-pepper'
									: ''
							}
						>
							{link.name}
						</NavLink>
					</React.Fragment>
				)
			})}
		</div>
	)
}
