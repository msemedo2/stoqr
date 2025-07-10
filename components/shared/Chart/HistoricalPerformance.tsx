'use client';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';
import { LineChart as LineChartIcon } from 'lucide-react';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/components/ui/select';
import { mockHistorical } from './mockHistorical';
import { useState, useMemo } from 'react';

export default function HistoricalPerformanceChart() {
	const [range, setRange] = useState('all');

	const filteredData = useMemo(() => {
		if (range === 'all') return mockHistorical;

		const now = new Date('2025-06-01'); // assume this is "now"
		const cutoff = new Date(now);

		if (range === '1y') {
			cutoff.setFullYear(cutoff.getFullYear() - 1);
		} else if (range === '3m') {
			cutoff.setMonth(cutoff.getMonth() - 3);
		}

		return mockHistorical.filter(
			(item) => new Date(item.date + '-01') >= cutoff
		);
	}, [range]);

	return (
		<div className="card w-full max-w-4xl p-4">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center gap-2">
					<LineChartIcon className="w-5 h-5 text-secondary" />
					<span className="text-secondary font-medium">
						Historical Performance
					</span>
				</div>

				<Select value={range} onValueChange={setRange}>
					<SelectTrigger className="w-[160px]">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All time</SelectItem>
						<SelectItem value="1y">Last year</SelectItem>
						<SelectItem value="3m">Last 3 months</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="h-[300px] w-full">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={filteredData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tick={{ fontSize: 12 }}
							tickMargin={10}
							interval={5}
							tickFormatter={(val) => val.replace('-01', '')}
						/>
						<YAxis
							tick={{ fontSize: 12 }}
							tickMargin={10}
							width={60}
							tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`}
						/>
						<Tooltip
							formatter={(value: number) => `€${value.toLocaleString()}`}
							labelFormatter={(label) => {
								const [year, month] = label.split('-');
								return `${month}/${year}`;
							}}
							contentStyle={{
								backgroundColor: '#1e293b',
								border: 'none',
								borderRadius: 6,
								color: 'white',
							}}
							itemStyle={{ color: 'white' }}
						/>
						<Line
							type="monotone"
							dataKey="value"
							stroke="#52C93E"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
