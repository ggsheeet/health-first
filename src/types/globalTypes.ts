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

export type BlogPostsProps = {
	title: string
	excerpt: string
	content?: string
	slug: string
	featuredImage: {
		node: {
			sourceUrl: string
			mediaDetails: {
				width: number
				height: number
			}
		}
	}
	tags?: {
		nodes: {
			name: string
		}[]
	}
}

export type DataContextProps = {
	blogPosts: BlogPostsProps[]
	loading: boolean
}
