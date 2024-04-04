'use client'
import Image from 'next/image'
import Link from 'next/link'
import { scroller } from 'react-scroll'
import ScrollHeader from '@/components/ScrollHeader'
import { useState, useEffect } from 'react'
import React, { useRef } from 'react'
import BannerStaff from '@/components/banner/bannersMain/bannerStaff'
import BannerServices from '@/components/banner/bannersMain/bannerServices'
import BannerAboutUs from '@/components/banner/bannersMain/bannerAboutUs'
import { HeroMain } from '@/components/hero/heroMain'

export default function Home() {
	const [isButtonVisible, setIsButtonVisible] = useState(true)
	const [hasScrolled, setHasScrolled] = useState(false)

	const targetRef = useRef(null)

	const scrollToSection = () => {
		console.log('Scrolling to section...')

		if (window.location.pathname !== '/') {
			console.log('Redirecting to the main page...')
			window.location.href = '/' // Redirect to the main page
		} else {
			console.log('Scrolling to target section...')
			// Scroll to the target section on the current page
			if (targetRef.current) {
				scroller.scrollTo('targetSection', '')
			}
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const footerElement = document.getElementById('footer')
			const scrollThreshold = 840 // Adjust this value to your desired scroll level

			if (!hasScrolled) {
				setHasScrolled(true)
			}

			const scrollPosition = window.scrollY + window.innerHeight

			if (
				scrollPosition >= scrollThreshold &&
				(!footerElement || scrollPosition < footerElement.offsetTop)
			) {
				setIsButtonVisible(true)
			} else {
				setIsButtonVisible(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [hasScrolled])

	return (
		<div>
			<ScrollHeader onScrollToSection={scrollToSection} />
			<HeroMain />
			<BannerAboutUs />
			<div id='targetSection' ref={targetRef}></div>
			{hasScrolled && isButtonVisible && (
				<div className='fixed bottom-6 md:bottom-8 right-2 md:right-6 z-10'>
					<Link
						href='https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_'
						target='_blank'
						className='bg-brand-keppel border-[0.175rem] border-brand-keppel --font-poppins text-brand-seasalt text-lg md:text-xl text-extrabold px-4 py-2 rounded-full hover:bg-brand-seasalt hover:text-brand-keppel'
						style={{
							animation: 'fade-in 0.2s ease-in'
						}}
					>
						Agenda tu consulta
					</Link>
				</div>
			)}

			<BannerServices />
			<BannerStaff />
		</div>
	)
}
