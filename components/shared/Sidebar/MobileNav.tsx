import { usePathname } from 'next/navigation';
import { navigationItems } from './navItems';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Icon from '../Icons/Icons';
import { LogOut } from 'lucide-react';

const MobileNav = () => {
	const pathname = usePathname();

	return (
		<div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background">
			<nav className="flex-center justify-between items-end px-8 py-4 mx-auto gap-28">
				<div className="flex gap-12">
					{navigationItems.slice(0, 2).map((item) => {
						const isActive = pathname === item.href;
						const Icon = item.icon;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'p-2',
									isActive ? 'text-primary' : 'text-secondary'
								)}
							>
								<Icon className="h-6 w-6" />
							</Link>
						);
					})}
				</div>
				<Link href="/" className="absolute left-1/2 -translate-x-1/2">
					<Icon type="LOGO" className="h-10 w-10" />
				</Link>
				<div className="flex gap-12">
					{navigationItems.slice(2).map((item) => {
						const isActive = pathname === item.href;
						const Icon = item.icon;
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									'p-2',
									isActive ? 'text-primary' : 'text-secondary'
								)}
							>
								<Icon className="h-6 w-6" />
							</Link>
						);
					})}
					<button className="p-2 text-secondary">
						<LogOut className="h-6 w-6" />
					</button>
				</div>
			</nav>
		</div>
	);
};

export default MobileNav;
