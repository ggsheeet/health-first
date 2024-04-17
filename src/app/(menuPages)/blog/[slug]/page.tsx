'use client'
import React, { useEffect, useState } from 'react'
import OtherHeader from '@/components/OtherHeader'
import { useParams } from 'next/navigation'
import { getSinglePost } from '@/lib/blogQueries'
import { BlogPostsProps } from '@/types/globalTypes'

const PostPage = () => {
	const params = useParams<{ slug: string }>()

	const [post, setPost] = useState<BlogPostsProps>()

	useEffect(() => {
		getSinglePost(params.slug).then((postInfo) => setPost(postInfo))
	}, [params])

	return <div>{post?.title}</div>
}

export default PostPage
