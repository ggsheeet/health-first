'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getBlogPosts } from '../blogQueries'
import { DataContextProps } from '@/types/globalTypes'

const DataContext = createContext<DataContextProps>({
	blogPosts: [],
	loading: true
})

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = useState(true)
	const [blogPosts, setBlogPosts] = useState([])

	useEffect(() => {
		let isMounted = true

		const fetchData = async () => {
			try {
				const postsFetched = await getBlogPosts()

				if (isMounted) {
					setBlogPosts(postsFetched)
					setLoading(false)
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<DataContext.Provider value={{ blogPosts, loading }}>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => {
	const context = useContext(DataContext)
	if (!context) {
		throw new Error('useData must be used within a DataProvider')
	}
	return context
}
