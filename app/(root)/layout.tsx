import Sidebar from '@/components/shared/Sidebar/Sidebar';

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<main className="flex-1 p-3 pb-[80px] lg:p-6">
				<div className="content-area">{children}</div>
			</main>
		</div>
	);
};

export default HomeLayout;
