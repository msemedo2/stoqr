import { Home, Landmark, ChartNoAxesCombined } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavItem {
	label: string;
	href: string;
	icon: LucideIcon;
}

export const navigationItems: NavItem[] = [
	{
		label: 'Dashboard',
		href: '/',
		icon: Home,
	},
	{
		label: 'Bank Accounts',
		href: '/bank-accounts',
		icon: Landmark,
	},
	{
		label: 'Investments',
		href: '/investments',
		icon: ChartNoAxesCombined,
	},
];
