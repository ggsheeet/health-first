import OtherHeader from '@/components/OtherHeader'
import { Footer } from '@/components/footer'

export default function NestedPageLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<OtherHeader />
			{children}
		</>
	)
}
