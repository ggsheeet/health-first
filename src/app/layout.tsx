import type { Metadata } from 'next'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import {
	Raleway,
	Noto_Sans,
	Noto_Sans_JP,
	Montserrat,
	Poppins
} from 'next/font/google'
import { Footer } from '@/components/footer'
import './globals.css'

const favicon = '/HF-MIN.png'

const rale = Raleway({
	weight: ['200', '300', '400', '500', '600'],
	subsets: ['latin'],
	variable: '--font-rale',
	display: 'swap'
})
const montse = Montserrat({
	subsets: ['latin'],
	variable: '--font-montse',
	display: 'swap'
})
const noto = Noto_Sans({
	subsets: ['latin'],
	variable: '--font-noto',
	display: 'swap'
})
const notojp = Noto_Sans_JP({
	subsets: ['latin'],
	variable: '--font-noto-jp',
	display: 'swap'
})
const poppins = Poppins({
	weight: ['200', '300', '400', '500'],
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap'
})

export const metadata: Metadata = {
	metadataBase: new URL('https://www.healthfirst.com.mx'),
	title: 'Health First',
	description:
		'Clínica médica de atención médica general así como tratamientos específicos de medicina estética y fisioterapia',
	keywords:
		'clinica, consulta, , laboratorio, ,enfermeria, medicina, estetica, rehabilitacion, nutricion, fitness, sabinas',
	robots: 'index, follow',
	openGraph: {
		title: 'Health First',
		description:
			'Clínica médica de atención médica general así como tratamientos específicos de medicina estética y fisioterapia',
		images: [
			{
				secureUrl: 'https://www.healthfirst.com.mx//HF-FULL.png',
				url: '/HF-FULL.png',
				width: 1200,
				height: 630
			}
		],
		url: 'https://www.healthfirst.com.mx',
		type: 'website'
	},
	alternates: {
		canonical: ''
	},
	icons: {
		icon: favicon
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='es'>
			<GoogleAnalytics gaId='G-SVQ6CDBS2D' />
			<GoogleTagManager gtmId='GTM-TZNNH5QG' />
			<body
				className={`${rale.variable} ${montse.variable} ${noto.variable} ${notojp.variable} ${poppins.variable}`}
			>
				{children}
				<Footer />
			</body>
		</html>
	)
}
