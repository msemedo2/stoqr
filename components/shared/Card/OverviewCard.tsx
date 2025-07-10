import React from 'react';
import { formatNumber } from '@/utils/formatters';
import { LucideIcon } from 'lucide-react';

interface OverviewItem {
	label: string;
	value: number;
	color: string;
}

interface OverviewCardProps {
	title: string;
	items: OverviewItem[];
	icon: LucideIcon;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
	title,
	items,
	icon: Icon,
}) => {
	const total = items.reduce((sum, item) => sum + item.value, 0);

	return (
		<div className="card">
			<div className="flex items-center gap-2 mb-6">
				<Icon className="w-5 h-5 text-secondary" />
				<span className="text-secondary">{title}</span>
			</div>

			<div className="w-full h-2 rounded-full bg-white/[0.08] mb-6 flex overflow-hidden">
				{items.map((item, index) => {
					const percentage = (item.value / total) * 100;
					return (
						<div
							key={index}
							className="h-full"
							style={{
								width: `${percentage}%`,
								backgroundColor: item.color,
							}}
						/>
					);
				})}
			</div>

			<div className="grid grid-cols-[2fr_3fr_auto] items-center gap-x-4 gap-y-4">
				{items.map((item, index) => {
					const percentage = (item.value / total) * 100;
					return (
						<React.Fragment key={index}>
							<span className="text-sm text-secondary">{item.label}:</span>
							<span className="font-mono text-right tabular-nums">
								{formatNumber(item.value)}€
							</span>
							<div
								className="text-sm rounded py-1 px-3 tabular-nums w-16 text-center"
								style={{
									backgroundColor: `${item.color}20`,
									color: item.color,
								}}
							>
								{Math.round(percentage)}%
							</div>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default OverviewCard;
