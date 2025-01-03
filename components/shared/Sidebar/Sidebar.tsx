'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationItems } from './navItems';
import MobileNav from './MobileNav';
import Logo from './Logo';
import AuthButtons from '@/components/Auth/AuthButtons';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
	const pathname = usePathname();
	const { data: session } = useSession();

	return (
		<>
			<div className="hidden w-64 bg-background lg:flex flex-col h-screen">
				<div className="p-6 pr-0">
					<div className="mb-8">
						<Logo />
					</div>
					<nav className="space-y-2">
						{navigationItems.map((item) => {
							const isActive = pathname === item.href;
							const Icon = item.icon;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-250',
										isActive
											? 'bg-elevated text-primary'
											: 'text-secondary hover:bg-hover'
									)}
								>
									<Icon className="h-5 w-5" />
									{item.label}
								</Link>
							);
						})}
					</nav>
				</div>
				<div className="mt-auto p-6 pr-0">
					<p className="text-sm px-3 py-2 text-secondary">
						{session ? session.user?.name : 'In Demo Mode'}
					</p>
					<AuthButtons />
				</div>
			</div>
			<MobileNav />
		</>
	);
};

export default Sidebar;
