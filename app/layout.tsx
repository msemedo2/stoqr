import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
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

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth();

	return (
		<html
			lang="en"
			className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
		>
			<SessionProvider session={session}>
				<body className="bg-background min-h-screen">
					{children}
					<Toaster />
				</body>
			</SessionProvider>
		</html>
	);
};

export default RootLayout;
