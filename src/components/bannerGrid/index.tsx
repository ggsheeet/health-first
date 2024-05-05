import React from 'react'
import { BannerBlog } from './bannerBlog'
import { BannerCarousel } from '../banner/bannerContainer/bannerCarousel'

const BannerGrid = () => {
	return (
		<>
			<BannerCarousel>
				<BannerBlog categoryName='General'/>
			</BannerCarousel>
			<BannerCarousel>
				<BannerBlog categoryName='Salud'/>
			</BannerCarousel>
			<BannerCarousel>
				<BannerBlog categoryName='Nutrición'/>
			</BannerCarousel>
		</>
	)
}

export default BannerGrid
