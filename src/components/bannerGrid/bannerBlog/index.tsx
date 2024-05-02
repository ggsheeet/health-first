'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts, getCategoryPosts } from '@/lib/blogQueries'
import { BlogPostsProps } from '@/types/globalTypes'
import DOMPurify from 'dompurify'
import styles from './BannerBlog.module.css'

export const BannerBlog = ({ categoryName, bannerId }: { categoryName: string, bannerId: string }) => {
	const [post, setPost] = useState<BlogPostsProps[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (categoryName === 'General') {
			getBlogPosts().then((postInfo) => {
				setPost(postInfo)
				setLoading(false)
			})
		} else {
			getCategoryPosts(categoryName).then((postInfo) => {
				setPost(postInfo)
				setLoading(false)
			})
		}
	}, [])

	const [currentIndex, setCurrentIndex] = useState(0)
	const [numPages, setNumPages] = useState(0)
	const [startX, setStartX] = useState(0)

	const itemsPerPage = {
		desktop: 3,
		tablet: 2,
		mobile: 1
	}

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
	}

	const handleTouchMove = () => {
		window.addEventListener('touchmove', ev => {
			  ev.preventDefault();
			  ev.stopImmediatePropagation();
		  }, { passive: false });
	}

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setStartX(e.touches[0].clientX)
	}

	const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
		const endX = e.changedTouches[0].clientX
		const deltaX = startX - endX
		const threshold = 50
		if (deltaX > threshold && currentIndex < numPages - 1) {
			setCurrentIndex((prevIndex) => prevIndex + 1)
			console.log('index and id', currentIndex, bannerId)
		} else if (deltaX < -threshold && currentIndex > 0) {
			setCurrentIndex((prevIndex) => prevIndex - 1)
			console.log('index and id', currentIndex, bannerId)
		}
	}

	const getViewport = (width: number) => {
		if (width >= 1280) {
			return 'desktop'
		} else if (width >= 768) {
			return 'tablet'
		} else {
			return 'mobile'
		}
	}

	const calculatePages = () => {
		const screenWidth = window.innerWidth
		const pages = Math.ceil(
			(post?.length || 0) / itemsPerPage[getViewport(screenWidth)]
		)
		setNumPages(pages)
	}

	useEffect(() => {
		calculatePages()

		let timeoutId: number
		const handleResize = () => {
			clearTimeout(timeoutId)
			timeoutId = window.setTimeout(() => {
				calculatePages()
				if (currentIndex <= numPages) {
					setCurrentIndex(0)
				}
			}, 1000)
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [post])

	return (
		<>
			<div id={bannerId}className={styles.grid_header}>
				<h2 className={styles.header_title}>{categoryName}</h2>
				<Link href='/' className={styles.header_cta}>
					<button>
						Ver más
						<div className={styles.arrow} />
					</button>
				</Link>
			</div>
			<div id={bannerId} className={styles.grid_content}>
				<div className={styles.grid_slider}>
					{loading ? (
						<>
							{[...Array(3)].map((_, index) => (
								<div key={index} className={styles.loading_skeleton}>
									<div className={`${styles.loading_thumbnail}`} />
									{[...Array(3)].map((_, index) => (
										<div key={index} className={`${styles.loading_text}`} />
									))}
								</div>
							))}
						</>
					) : (
						<>
							{post.map((post, index) => {
								const postTitle = post.title.trim().split(' ')
								const postExcerpt = post.excerpt.trim().split(' ')
								const truncatedTitle =
									postTitle.length > 12
										? postTitle.slice(0, 12).join(' ') + '...'
										: post.title
								const truncatedExcerpt =
									postExcerpt.length > 15
										? postExcerpt.slice(0, 15).join(' ') + '[...]'
										: post.excerpt
								return (
									<div
										key={index}
										onTouchStart={handleTouchStart}
										onTouchMove={handleTouchMove}
										onTouchEnd={handleTouchEnd}
										className={styles.grid_post}
										style={{
											transform: `translateX(-${currentIndex * 109.5}%)`,
											touchAction: 'none'
										}}
									>
										<Link
											href={`/blog/${post.slug}`}
											className={styles.post_img}
										>
											<Image
												src={post?.featuredImage?.node.sourceUrl}
												alt='thumbnail'
												width={post.featuredImage?.node.mediaDetails.width}
												height={post.featuredImage?.node.mediaDetails.height}
											/>
											<div className={styles.post_overlay} />
										</Link>
										<Link href={`/blog/${post.slug}`}>
											<h3
												className={styles.post_title}
												dangerouslySetInnerHTML={{
													__html: DOMPurify.sanitize(truncatedTitle.toString())
												}}
											/>
										</Link>
										<div
											className={styles.post_excerpt}
											dangerouslySetInnerHTML={{
												__html: DOMPurify.sanitize(truncatedExcerpt.toString())
											}}
										/>
									</div>
								)
							})}
						</>
					)}
				</div>
				<div className={styles.dots}>
					{numPages > 1 && (
						<>
							{[...Array(numPages)].map((_, index) => (
								<span
									key={index}
									className={`${styles.dot} ${
										index === currentIndex ? styles.active_dot : ''
									}`}
									onClick={() => handleDotClick(index)}
								/>
							))}
						</>
					)}
				</div>
			</div>
		</>
	)
}
