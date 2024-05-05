'use client'
import React, { useEffect} from 'react'
import { BannerBlog } from './bannerBlog'
import { BannerCarousel } from '../banner/bannerContainer/bannerCarousel'

const BannerGrid = () => {
	useEffect(() => {
		const handleBodyTouchMove = (e: TouchEvent) => {
			e.preventDefault();
		};
	
		document.body.addEventListener('touchmove', handleBodyTouchMove, {
			passive: false,
		});
	
		return () => {
			document.body.removeEventListener('touchmove', handleBodyTouchMove);
		};
	}, []);
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
