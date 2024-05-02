import React from 'react'
import { BannerBlog } from './bannerBlog'
import { BannerCarousel } from '../banner/bannerContainer/bannerCarousel'

const BannerGrid = () => {
	return (
		<>
			<BannerCarousel>
				<BannerBlog categoryName='General' bannerId='gen'/>
			</BannerCarousel>
			<BannerCarousel>
				<BannerBlog categoryName='Salud' bannerId='health'/>
			</BannerCarousel>
			<BannerCarousel>
				<BannerBlog categoryName='Nutrición' bannerId='nutri'/>
			</BannerCarousel>
		</>
	)
}

export default BannerGrid
