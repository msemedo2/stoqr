'use client';

import SummaryCard from '@/components/shared/Card/SummaryCard';
import AssetDistributionChart from '@/components/shared/Chart/AssetDistributionChart';
import { Landmark } from 'lucide-react';
import { BreakdownTable } from '@/components/shared/BreakdownTable/BreakdownTable';
import { Button } from '@/components/ui/button';
import BankAccountModal from '@/components/BankAccountModal/BankAccountModal';

// Types
interface ListItem {
	[key: string]: string;
}

interface BankFormData {
	bankName: string;
	displayColor: string;
	accounts: ListItem[];
}

const BankAccountPage = () => {
	const totalBankValue = 150000;

	const bankBreakdownData = [
		{
			name: 'Santander',
			total: '110,000.00€',
			accounts: [
				{ label: 'Current Account', amount: '10,000.00€' },
				{ label: 'Term Deposit', amount: '75,000.00€' },
			],
		},
		{
			name: 'ING',
			total: '35,000.00€',
			accounts: [{ label: 'Current Account', amount: '25,000.00€' }],
		},
		{
			name: 'Banco Invest',
			total: '5,000.00€',
			accounts: [{ label: 'Current Account', amount: '5,000.00€' }],
		},
	];

	const handleSaveBank = (bankData: BankFormData) => {
		console.log('Saving bank data:', bankData);
		// TODO: Add logic to save bank data
	};

	const handleCancelBank = () => {
		console.log('Cancelled bank modal');
	};

	return (
		<div className="px-4 pt-4">
			{/* Main Content with relative positioning for button */}
			<div className="relative">
				{/* Floating Add Button */}
				<div className="absolute top-0 right-0 z-20">
					<BankAccountModal
						trigger={
							<Button variant="default" size="sm" className="whitespace-nowrap">
								Add Account +
							</Button>
						}
						title="Add New Bank Account"
						onSave={handleSaveBank}
						onCancel={handleCancelBank}
					/>
				</div>

				{/* Cards Container with top margin to account for button */}
				<div className="flex flex-wrap gap-6 mt-12">
					<SummaryCard
						icon={Landmark}
						title="Total in Banks"
						value={totalBankValue}
						change={{
							percentage: 2.35,
							value: 1259,
						}}
					/>
					<AssetDistributionChart
						title="Bank Distribution"
						icon="pie"
						data={[
							{ name: 'Santander', value: 110000, fill: '#F97316' },
							{ name: 'ING', value: 35000, fill: '#3B82F6' },
							{ name: 'Banco Invest', value: 5000, fill: '#EF4444' },
						]}
					/>
				</div>

				{/* Breakdown Table */}
				<div className="mt-6">
					<BreakdownTable banks={bankBreakdownData} />
				</div>
			</div>
		</div>
	);
};

export default BankAccountPage;
