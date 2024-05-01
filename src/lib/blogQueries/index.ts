export const getBlogPosts = async () => {
	try {
		const headers = {
			'Content-Type': 'application/json'
		}
		const requestBody = {
			query: `query GetBlogPosts {
            posts(where: {status: PUBLISH}, first: 3) {
                nodes {
                    title
                    excerpt
                    slug
                    featuredImage {
                        node {
                            sourceUrl
                            mediaDetails {
                                width
                                height
                            }
                        }
                    }
					tags {
                        nodes {
                            name
                        }
                    }
                }
            }
        }`,
			fetchPolicy: 'network-only'
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_WP_GQL_URL}/graphql`, {
			method: 'POST',
			headers,
			body: JSON.stringify(requestBody)
		})

		if (!res.ok) {
			throw new Error(`Failed to fetch Blog Posts: ${res.statusText}`)
		}
		const resJSON = await res.json()
		const data = resJSON.data.posts.nodes
		return data
	} catch (error) {
		console.error(`Error fetching Blog Posts:`, error)
		return []
	}
}

export const getCategoryPosts = async (categoryName: string) => {
	try {
		const headers = {
			'Content-Type': 'application/json'
		}
		const requestBody = {
			query: `query GetCategoryPosts($categoryName: String!) {
            posts(where: {categoryName: $categoryName, status: PUBLISH}, first: 3) {
                nodes {
                    title
                    excerpt
                    slug
                    featuredImage {
                        node {
                            sourceUrl
                            mediaDetails {
                                width
                                height
                            }
                        }
                    }
					tags {
                        nodes {
                            name
                        }
                    }
                }
            }
        }`,
			fetchPolicy: 'network-only',
			variables: { categoryName }
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_WP_GQL_URL}/graphql`, {
			method: 'POST',
			headers,
			body: JSON.stringify(requestBody)
		})

		if (!res.ok) {
			throw new Error(`Failed to fetch Blog Posts: ${res.statusText}`)
		}
		const resJSON = await res.json()
		const data = resJSON.data.posts.nodes
		return data
	} catch (error) {
		console.error(`Error fetching Blog Posts:`, error)
		return []
	}
}

export const getSinglePost = async (id: string) => {
	try {
		const headers = {
			'Content-Type': 'application/json'
		}
		const requestBody = {
			query: `query GetSinglePost($id: ID!) {
                post(id: $id, idType: SLUG) {
                    title
                    excerpt
                    content
                    tags {
                        nodes {
                            name
                        }
                    }
                    featuredImage {
                        node {
                            sourceUrl
                            mediaDetails {
                                width
                                height
                            }
                        }
                    }
                  }
        }`,
			fetchPolicy: 'network-only',
			variables: { id }
		}

		const res = await fetch(`${process.env.NEXT_PUBLIC_WP_GQL_URL}/graphql`, {
			method: 'POST',
			headers,
			body: JSON.stringify(requestBody)
		})

		if (!res.ok) {
			throw new Error(`Failed to fetch Blog Post: ${res.statusText}`)
		}
		const resJSON = await res.json()
		const data = resJSON.data
		return data.post
	} catch (error) {
		console.error(`Error fetching Blog Posts:`, error)
		return []
	}
}
