import { Sidebar } from '@/components/shared/Sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<main className="flex-1 p-6">
				<div className="bg-surface rounded-2xl p-6 h-full">{children}</div>
			</main>
		</div>
	);
}
