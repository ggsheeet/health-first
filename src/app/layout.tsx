import type { Metadata } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
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
			<Head>
				{/* GTM script for the <head> section */}
				<Script
					strategy='lazyOnload'
					dangerouslySetInnerHTML={{
						__html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-TZNNH5QG');
                        `
					}}
				/>
			</Head>
			<GoogleTagManager gtmId='G-SVQ6CDBS2D' />
			<body
				className={`${rale.variable} ${montse.variable} ${noto.variable} ${notojp.variable} ${poppins.variable}`}
			>
				{children}
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-TZNNH5QG'
						height='0'
						width='0'
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				<Footer />
			</body>
		</html>
	)
}
