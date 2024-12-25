import { Inter, JetBrains_Mono } from 'next/font/google';
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
		<html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
			<body className="bg-background min-h-screen">{children}</body>
		</html>
	);
}
