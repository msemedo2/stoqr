import { LucideIcon, ArrowRight } from 'lucide-react';
import { formatNumber } from '@/utils/formatters';
import Link from 'next/link';

interface BreakdownItem {
	label: string;
	value: number;
}

interface BreakdownCardProps {
	icon: LucideIcon;
	title: string;
	items: BreakdownItem[];
	ctaLink: string;
}

const BreakdownCard: React.FC<BreakdownCardProps> = ({
	icon: Icon,
	title,
	items,
	ctaLink,
}) => {
	const total = items.reduce((sum, item) => sum + item.value, 0);

	return (
		<div className="card flex flex-col justify-between">
			<div>
				<div className="flex items-center gap-2 mb-4">
					<Icon className="w-5 h-5 text-secondary" />
					<span className="text-secondary">{title}</span>
				</div>

				<div className="flex flex-col gap-4">
					{items.map((item) => (
						<div key={item.label} className="flex justify-between gap-10">
							<span className="text-sm text-secondary">{item.label}:</span>
							<span className="text-sm font-mono tabular-nums whitespace-nowrap">
								{formatNumber(item.value)}€
							</span>
						</div>
					))}
				</div>

				{/* Separator and Total */}
				<div className="mt-4 pt-4 border-t border-white/10">
					<div className="flex justify-between items-center">
						<span className="font-semibold">Total</span>
						<span className="numeric font-semibold font-mono">
							{formatNumber(total)}€
						</span>
					</div>
				</div>

				{/* View Details Link */}
			</div>
			<Link
				href={ctaLink}
				className="flex items-center justify-end gap-2 mt-4 text-xs text-secondary hover:text-white transition-colors"
			>
				View Details
				<ArrowRight className="w-4 h-4" />
			</Link>
		</div>
	);
};

export default BreakdownCard;
