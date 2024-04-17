'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useData } from '@/lib/context'
import { DataProvider } from '@/lib/context'
import DOMPurify from 'dompurify'
import styles from './GridBlog.module.css'

export const GridBlog = () => {
	const { blogPosts } = useData()

	if (blogPosts.length === 0) {
		return <div>Loading...</div>
	}

	const data = blogPosts

	return (
		<>
			<div className={styles.grid_container}>
				<div className={styles.grid_header}>
					<h2 className={styles.header_title}>General</h2>
					<Link href='/' className={styles.header_cta}>
						<button>
							Ver más
							<div className={styles.arrow} />
						</button>
					</Link>
				</div>
				<div className={styles.grid_content}>
					{data.map((post, index) => {
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
							<div key={index} className={styles.grid_post}>
								<Link href={`/blog/${post.slug}`} className={styles.post_img}>
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
				</div>
			</div>
		</>
	)
}
