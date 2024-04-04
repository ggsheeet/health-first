export type LinkProps = {
    children: React.ReactNode
    href: string
    className?: string | undefined
}

export type DrawerProps = {
	isOpen: boolean
	toggleDrawer: () => void
}

export type WrapperProps = {
	children: React.ReactNode
}
