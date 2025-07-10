'use client';

import SummaryCard from '@/components/shared/Card/SummaryCard';
import AssetDistributionChart from '@/components/shared/Chart/AssetDistributionChart';
import { TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InvestmentsTable from '@/components/InvestmentsTable/InvestmentsTable';
import InvestmentModal from '@/components/InvestmentModal/InvestmentModal';

const InvestmentsPage = () => {
	const totalInvestmentValue = 75000;

	const handleSaveInvestment = (investmentData: any) => {
		console.log('Saving investment data:', investmentData);
		// TODO: Add logic to save investment data
	};

	const handleCancelInvestment = () => {
		console.log('Cancelled investment modal');
	};

	const formatCurrency = (amount: number) => {
		return (
			new Intl.NumberFormat('pt-PT', {
				style: 'currency',
				currency: 'EUR',
				minimumFractionDigits: 2,
			})
				.format(amount)
				.replace('€', '') + '€'
		);
	};

	const formatPercentage = (percentage: number) => {
		const sign = percentage >= 0 ? '+' : '';
		return `${sign}${percentage.toFixed(1)}%`;
	};

	const investmentsData = [
		{
			name: 'BABA-Alibaba Group Holding',
			price: 200.0,
			quantity: 10,
			value: 25000.0,
			totalGainLoss: -10000.0,
			percentageChange: -2.5,
		},
		{
			name: 'AAPL-Apple Inc.',
			price: 150.0,
			quantity: 15,
			value: 22500.0,
			totalGainLoss: 10000.0,
			percentageChange: 2.5,
		},
		{
			name: 'MSFT-Microsoft Corporation',
			price: 300.0,
			quantity: 8,
			value: 24000.0,
			totalGainLoss: 5000.0,
			percentageChange: 1.8,
		},
		{
			name: 'TSLA-Tesla Inc.',
			price: 180.0,
			quantity: 5,
			value: 9000.0,
			totalGainLoss: -2000.0,
			percentageChange: -1.2,
		},
	];

	return (
		<div className="px-4 pt-4">
			{/* Main Content with relative positioning for button */}
			<div className="relative">
				{/* Floating Add Button */}
				<div className="absolute top-0 right-0 z-20">
					<InvestmentModal
						trigger={
							<Button variant="default" size="sm" className="whitespace-nowrap">
								Add Investment +
							</Button>
						}
						title="Add Investment Transaction"
						onSave={handleSaveInvestment}
						onCancel={handleCancelInvestment}
					/>
				</div>

				{/* Cards Container with top margin to account for button */}
				<div className="flex flex-wrap gap-6 mt-12">
					<SummaryCard
						icon={TrendingUp}
						title="Total Investments"
						value={totalInvestmentValue}
						change={{
							percentage: 8.42,
							value: 5834,
						}}
					/>
					<AssetDistributionChart
						title="Investment Distribution"
						icon="pie"
						data={[
							{ name: 'Stocks', value: 35000, fill: '#10B981' },
							{ name: 'ETFs', value: 25000, fill: '#3B82F6' },
							{ name: 'Crypto', value: 10000, fill: '#F59E0B' },
							{ name: 'Bonds', value: 5000, fill: '#8B5CF6' },
						]}
					/>
				</div>

				{/* Investments Table */}
				<div className="mt-6">
					<InvestmentsTable
						investments={investmentsData}
						lastUpdated="01/01/25"
					/>
				</div>
			</div>
		</div>
	);
};

export default InvestmentsPage;
