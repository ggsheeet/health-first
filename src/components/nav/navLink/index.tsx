import React from 'react'
import Link from 'next/link'
import { LinkProps } from '@/types/globalTypes'

export const NavLink: React.FC<LinkProps> = ({
	href,
	children,
	className = ''
}) => {
	return (
		<Link href={href} className={className}>
			{children}
		</Link>
	)
}
