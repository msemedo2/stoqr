'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigationItems } from './navItems';
import { Logo } from './Logo';

export function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="w-64 bg-background flex flex-col h-screen">
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
				<button className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-base font-medium text-secondary hover:bg-hover transition-all duration-250">
					<LogOut className="h-5 w-5" />
					Logout
				</button>
			</div>
		</div>
	);
}
