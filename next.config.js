/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
	connect-src https://wordpress.healthfirst.com.mx https://www.healthfirst.com.mx https://analytics.google.com http://localhost:3000 ws://localhost:3000;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: images.ctfassets.net https://wordpress.healthfirst.com.mx;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`
const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: cspHeader.replace(/\n/g, '')
					}
				]
			}
		]
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.ctfassets.net'
			},
			{
				protocol: 'https',
				hostname: 'wordpress.healthfirst.com.mx'
			}
		]
	}
}

module.exports = nextConfig
