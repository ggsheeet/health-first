/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
	  connect-src https://cdn.contentful.com https://www.healthfirst.com.mx https://analytics.google.com ws://localhost:3000;;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: images.ctfassets.net;
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
			}
		]
	}
}

module.exports = nextConfig
