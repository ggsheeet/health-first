import React, { useState } from 'react'
import Image from 'next/image'
import { BannerGeneral } from '../../bannerContainer/bannerGeneral'
import { services } from '@/lib/mappedObjects'
import styles from './BannerServices.module.css'

const BannerServices = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const toggleAccordion = (index: number) => {
		setActiveIndex(index)
	}
	return (
		<BannerGeneral>
			<div className={styles.banner_title}>
				<h2>Nuestros Servicios</h2>
			</div>
			<div className={styles.banner_content}>
				<div className={styles.banner_services}>
					<div className={styles.service_left}>
						{services.map((service, index) => (
							<div
								key={index}
								className={`${styles.service_name} ${
									activeIndex === index ? styles.active : ''
								}`}
							>
								<h3>{service.title}</h3>
								<button
									className={`${styles.staff_arrow} ${
										activeIndex === index ? styles.active : ''
									}`}
									onClick={() => toggleAccordion(index)}
								/>
							</div>
						))}
						<select
							name='services'
							id='services'
							onChange={(e) => toggleAccordion(parseInt(e.target.value))}
						>
							{services.map((service, index) => (
								<option key={index} value={index}>
									{service.title}
								</option>
							))}
						</select>
					</div>
					<div className={styles.service_right}>
						{services.map((service, index) => (
							<div
								key={index}
								className={`${styles.service_info} ${
									activeIndex === index ? 'flex fade-in' : 'hidden'
								}`}
							>
								{Object.entries(service.bullets).map(([index, bullet]) => (
									<div key={index} className={styles.service_bullets}>
										<Image
											src={service.src}
											alt={service.alt}
											width={service.width}
											height={service.height}
											className='w-12'
										/>

										<p>{bullet}</p>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</BannerGeneral>
	)
}

export default BannerServices
