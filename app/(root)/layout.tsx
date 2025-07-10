import Sidebar from '@/components/shared/Sidebar/Sidebar';

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className="hidden lg:flex min-h-screen">
				<Sidebar />
				<main className="flex-1 p-3 pb-[80px] lg:p-6">
					<div className="content-area">{children}</div>
				</main>
			</div>
			<div className="lg:hidden min-h-screen flex-center m">
				<h1 className="text-4xl numeric text-center">
					Mobile Still in Development
				</h1>
			</div>
		</>
	);
};

export default HomeLayout;
