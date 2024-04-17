import React from 'react'
import OtherHeader from '@/components/OtherHeader'
import { DataProvider } from '@/lib/context'
import HeroBlog from '@/components/hero/heroOthers/heroBlog'
import { GridBlog } from '@/components/grid/gridBlog'

export default function Blog() {
	return (
		<div>
			<HeroBlog />
			<DataProvider>
				<GridBlog />
			</DataProvider>
		</div>
	)
}
