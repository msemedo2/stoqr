import { Sidebar } from '@/components/shared/Sidebar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<main className="flex-1 p-3 pb-[80px] lg:p-6">
				<div className="content-area">{children}</div>
			</main>
		</div>
	);
}
