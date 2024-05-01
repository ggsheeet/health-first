import React from 'react'
import Image from 'next/image'
import { BannerGeneral } from '../../bannerContainer/bannerGeneral'
import styles from './BannerAboutUs.module.css'

const BannerAboutUs = () => {
	return (
		<>
			<BannerGeneral>
				<div className={styles.banner_title}>
					<h2>Acerca de Nosotros</h2>
				</div>
				<div className={`${styles.banner_content} mb-10`}>
					<Image src='/team.png' priority alt='team' width={3959} height={2758} />
					<div className={styles.banner_text}>
						<h3>Quienes somos</h3>
						<p>
							Somos una clínica dedicada a brindar servicios de consulta general
							y atención a urgencias menores.
						</p>
					</div>
				</div>
				<div className={styles.banner_content}>
					<Image src='/pharm.png' priority alt='pharm' width={3959} height={2758} className='order-1 md:order-2'/>
					<div className={`${styles.banner_text} order-2 md:order-1`}>
						<h3>Nuestra prioridad</h3>
						<p>
                        Proporcionar un enfoque integral y personalizado para el cuidado de la salud de nuestros pacientes.
						</p>
					</div>
				</div>
			</BannerGeneral>
		</>
	)
}

export default BannerAboutUs
