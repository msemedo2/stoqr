import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatNumber } from '@/utils/formatters';

interface SummaryCardProps {
	icon: LucideIcon;
	title: string;
	value: number;
	change?: {
		percentage: number;
		value: number;
	};
}

const SummaryCard: React.FC<SummaryCardProps> = ({
	icon: Icon,
	title,
	value,
	change,
}) => {
	return (
		<div className="card">
			<div className="flex items-center gap-2 mb-4">
				<Icon className="w-5 h-5 text-secondary" />
				<span className="text-secondary">{title}</span>
			</div>
			<div
				className={cn(
					'numeric text-3xl font-mono mb-2',
					value < 0 && 'text-danger'
				)}
			>
				{formatNumber(value)}€
			</div>
			{change && (
				<div className="space-y-1">
					<div className="text-sm text-secondary">From last month</div>
					<div className="space-y-0.5">
						<div
							className={cn(
								'numeric',
								change.percentage >= 0 ? 'text-success' : 'text-danger'
							)}
						>
							{change.percentage >= 0 ? '+' : ''}
							{formatNumber(change.percentage)}%
						</div>
						<div
							className={cn(
								'numeric',
								change.value >= 0 ? 'text-success' : 'text-danger'
							)}
						>
							{change.value >= 0 ? '+' : ''}
							{formatNumber(change.value)}€
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SummaryCard;
