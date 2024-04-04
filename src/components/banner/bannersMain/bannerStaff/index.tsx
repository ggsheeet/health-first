import React, { useState } from 'react'
import Image from 'next/image'
import { staffMembers } from '@/lib/mappedObjects'
import styles from './BannerStaff.module.css'
import { BannerContainer } from '../../bannerContainer'

const BannerStaff = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const toggleAccordion = (index: number) => {
		setActiveIndex(index)
	}

	return (
		<BannerContainer>
			<div className={styles.banner_title}>
				<h2>Conoce al Equipo</h2>
			</div>
			<div className={styles.banner_staff}>
				{staffMembers.map((member, index) => (
					<div
						key={index}
						className={`${styles.banner_section} ${
							index === activeIndex ? styles.active : ''
						}`}
					>
						<Image
							src={member.src}
							width={member.width}
							height={member.height}
							alt={member.alt}
							className={`${styles.staff_img} shadow-lg`}
						/>
						<button
							className={styles.staff_arrow}
							onClick={() => toggleAccordion(index)}
						/>
						<div className={styles.staff_info}>
							<Image
								src={member.logo}
								width={member.logoWidth}
								height={member.logoHeight}
								alt={member.alt}
								className={styles.staff_logo}
							/>
							<div className={styles.staff_education}>
								<div className={styles.staff_creds}>
									<Image
										src={member.diploma}
										width={member.diplomaWidth}
										height={member.diplomaHeight}
										alt='diploma'
										className={styles.staff_certificate}
									/>
									<p className={styles.staff_title}>
										{member.titleOne} <br />
										{member.schoolOne} <br />
										{member.cedOne}
									</p>
								</div>
								{member.titleTwo !== '' ? (
									<div className={styles.staff_creds}>
										<Image
											src={member.diploma}
											width={member.diplomaWidth}
											height={member.diplomaHeight}
											alt='diploma'
											className={styles.staff_certificate}
										/>
										<p className={styles.staff_title}>
											{member.titleTwo} <br />
											{member.schoolTwo} <br />
											{member.cedTwo}
										</p>
									</div>
								) : (
									<></>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</BannerContainer>
	)
}

export default BannerStaff
