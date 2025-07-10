import BreakdownCard from '@/components/shared/Card/BreakdownCard';
import OverviewCard from '@/components/shared/Card/OverviewCard';
import SummaryCard from '@/components/shared/Card/SummaryCard';
import AssetDistributionChart from '@/components/shared/Chart/AssetDistributionChart';
import HistoricalPerformanceChart from '@/components/shared/Chart/HistoricalPerformance';
import { ROUTES } from '@/lib/routes';
import {
	ChartColumn,
	ChartNoAxesCombined,
	HandCoins,
	Landmark,
} from 'lucide-react';
import React from 'react';

const Dashboard = () => {
	const assetItems = [
		{
			label: 'Total in Banks',
			value: 250000,
			color: '#1D4ED8',
		},
		{
			label: 'Total Invested',
			value: 100000,
			color: '#52C93E',
		},
	];

	const bankItems = [
		{ label: 'Santander', value: 30000 },
		{ label: 'Banco Invest', value: 21000 },
		{ label: 'Ing', value: 5000 },
	];

	const investmentItems = [
		{ label: 'Degiro', value: 30000 },
		{ label: 'Banco Invest', value: 21000 },
	];

	return (
		<div className="lg:flex gap-6 flex-wrap">
			<SummaryCard
				icon={HandCoins}
				title="Total Net Worth"
				value={350000}
				change={{
					percentage: 2.35,
					value: 1259,
				}}
			/>
			<OverviewCard
				title="Asset Overview"
				items={assetItems}
				icon={ChartColumn}
			/>
			<BreakdownCard
				icon={Landmark}
				title="Total Banks"
				items={bankItems}
				ctaLink={ROUTES.BANK_ACCOUNTS}
			/>
			<BreakdownCard
				icon={ChartNoAxesCombined}
				title="Total Invested"
				items={investmentItems}
				ctaLink={ROUTES.INVESTMENTS}
			/>
			<AssetDistributionChart
				title="Investment Breakdown"
				icon="landmark"
				data={[
					{ name: 'Stocks', value: 70, fill: '#22c55e' },
					{ name: 'ETFs', value: 30, fill: '#2563eb' },
				]}
			/>

			<HistoricalPerformanceChart />
		</div>
	);
};

export default Dashboard;
