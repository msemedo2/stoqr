import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['600', '700', '800', '900'],
	variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['600', '700', '800'],
	variable: '--font-jetbrains-mono',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
	title: 'Stoqr - Personal Finance Tracker',
	description:
		'Track your personal finances across multiple accounts and investments',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
		>
			<body className="bg-background min-h-screen">{children}</body>
		</html>
	);
}
