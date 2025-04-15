import type { Metadata } from 'next';
// import Footer from './Footer';
import './globals.css';
import Header from './Header';

export const metadata: Metadata = {
	metadataBase: new URL('https://thenerveclub.com'),
	title: {
		default: 'The Nerve Club',
		template: '%s | The Nerve Club',
	},
	description: 'True to Web3.',
	keywords: [
		'The Nerve Club',
		'Web3',
		'Blockchain',
		'NFTs',
		'Digital Innovation',
		'High-End Technology',
		'Crypto Projects',
		'Exclusive Web3 Experiences',
		'Web3 Development',
		'Web3 Consulting',
		'Web3 Marketing',
		'Web3 Design',
		'Web3 Development',
		'Web3 Consulting',
		'Web3 Marketing',
		'Web3 Strategy',
		'Decentralized Applications',
		'Smart Contracts',
		'DeFi',
		'Decentralized Finance',
	],
	authors: [{ name: 'The Nerve Club' }],
	creator: 'The Nerve Club',
	openGraph: {
		title: 'The Nerve Club',
		description: 'True to Web3.',
		url: 'https://thenerveclub.com',
		siteName: 'The Nerve Club',
		images: [
			{
				url: 'https://thenerveclub.com/og.png',
				width: 1200,
				height: 630,
				alt: 'The Nerve Club Website Preview',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'The Nerve Club',
		description: 'True to Web3.',
		images: ['https://thenerveclub.com/og.png'],
		creator: '@TheNerveClub',
	},
	icons: {
		icon: '/favicon.ico',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head></head>
			<body className="antialiased min-h-screen relative bg-cover bg-center bg-no-repeat">
				{/* Fixed Header */}
				<header className="fixed top-0 left-0 w-full z-20 h-auto bg-transparent">
					<Header />
				</header>

				{/* Main content area */}
				<main
					// className="w-[80%] m-auto pt-[100px] z-20"
					className="min-h-screen overflow-hidden bg-no-repeat bg-fixed bg-black"
				>
					{children}
				</main>

				{/* Fixed Footer */}
				{/* <footer className="bottom-0 left-0 w-full z-20">
					<Footer />
				</footer> */}
			</body>
		</html>
	);
}
