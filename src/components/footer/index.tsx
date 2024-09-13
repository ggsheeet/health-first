import Link from 'next/link'
import CommonLink from '../commonLink'
import { FooterTypes } from '@/types/footerTypes'
import { LocSvg, PhoneSvg, EmailSvg, InstaSvg, FacebookSvg } from '../svg'
import styles from './Footer.module.css'

const FooterSection: React.FC<FooterTypes> = ({ title, children }) => (
	<div className={styles.footer_section}>
		<h5 className={styles.footer_headers}>{title}</h5>
		{children}
	</div>
)

export const Footer = () => {
	const locationSvg = <LocSvg />
	return (
		<footer id='footer' className={styles.footer_container}>
			<div className={styles.footer_content}>
				<div className={styles.footer_separation}>
					<FooterSection
						title={
							<>
								{'Ubicación'} {locationSvg} {'MX'}
							</>
						}
					>
						<CommonLink
							href='https://goo.gl/maps/14J8UrAggB7BTQy27'
							className={styles.footer_info}
						>
							{'Sabinas Hidalgo, Nuevo León'}
						</CommonLink>
						<CommonLink
							href='https://goo.gl/maps/14J8UrAggB7BTQy27'
							className={styles.footer_info}
						>
							{'Calle Mina #135, Colonia Centro'}
						</CommonLink>
						<p className={styles.footer_info}>
							Horas de trabajo: Lun - Sab 08:00 - 20:00
						</p>
					</FooterSection>
					<FooterSection title='Contáctanos'>
						<div className={styles.footer_contact}>
							<PhoneSvg />
							<Link href='tel:824-121-9954' className='pl-1 md:pl-0'>
								{'  '}
								{'824-121-9954'}
							</Link>
						</div>
						<div className={styles.footer_contact}>
							<EmailSvg />
							<Link href='mailto:info@healthfirst.com.mx'>
								{'   '}
								{'info@healthfirst.com.mx'}
							</Link>
						</div>
					</FooterSection>
					<FooterSection title='Síguenos'>
						<div className={styles.footer_social}>
							<CommonLink href='https://www.instagram.com/healthfirst.wellnesscenter/'>
								<InstaSvg />
							</CommonLink>
							<CommonLink href='https://www.facebook.com/profile.php?id=100091417977763'>
								<FacebookSvg />
							</CommonLink>
						</div>
					</FooterSection>
				</div>
				<div className={styles.footer_copyright}>
					<p>© 2023 Health First | Wellness Center. All Rights Reserved</p>
					<div>
						<CommonLink
							href='https://docs.google.com/document/d/1U7vhw9h43JBun3-u4pO285bc8hDeYIvewdCPqqRa7RY/edit?usp=sharing'
							className='cursor-pointer hover:border-b-[0.0125rem] hover:inline-block hover:border-b-brand-ultra-violet'
						>
							Aviso de Privacidad
						</CommonLink>
					</div>
				</div>
			</div>
		</footer>
	)
}
