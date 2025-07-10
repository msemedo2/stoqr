'use client';

import {
	PieChart as PieChartIcon,
	Pie,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import { PieChart, Landmark } from 'lucide-react';

type DistributionItem = {
	name: string;
	value: number;
	fill: string;
};

type Props = {
	title: string;
	data: DistributionItem[];
	icon?: 'pie' | 'landmark';
};

const iconMap = {
	pie: PieChart,
	landmark: Landmark,
};

export default function AssetDistributionChart({
	title,
	data,
	icon = 'pie',
}: Props) {
	const Icon = iconMap[icon];

	return (
		<div className="card">
			<div className="flex items-center gap-2 mb-4">
				{Icon && <Icon className="w-5 h-5 text-secondary" />}
				<span className="text-secondary font-medium">{title}</span>
			</div>
			<div className="flex justify-center py-4">
				<ResponsiveContainer width={210} height={210}>
					<PieChartIcon>
						<Tooltip
							formatter={(value: number, name: string) => [
								`${value.toLocaleString()}€`,
								name,
							]}
							contentStyle={{
								backgroundColor: '#1e293b',
								border: 'none',
								borderRadius: 6,
							}}
							itemStyle={{ color: 'white' }}
						/>
						<Pie
							data={data}
							dataKey="value"
							nameKey="name"
							cx="50%"
							cy="50%"
							outerRadius={80}
							label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
							labelLine={false}
						/>
					</PieChartIcon>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
