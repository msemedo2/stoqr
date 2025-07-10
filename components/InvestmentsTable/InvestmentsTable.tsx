import { Edit } from 'lucide-react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

interface Investment {
	name: string;
	price: number;
	quantity: number;
	value: number;
	totalGainLoss: number;
	percentageChange: number;
}

interface InvestmentsTableProps {
	investments: Investment[];
	lastUpdated?: string;
}

const InvestmentsTable: React.FC<InvestmentsTableProps> = ({
	investments,
	lastUpdated = '01/01/25',
}) => {
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

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead className="text-center">Price</TableHead>
					<TableHead className="text-center">QTY</TableHead>
					<TableHead className="text-center">Value</TableHead>
					<TableHead className="text-right">
						Total
						<div className="text-xs text-muted-foreground font-normal">
							Last updated {lastUpdated}{' '}
							<Edit className="inline w-3 h-3 ml-1" />
						</div>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{investments.map((investment, index) => (
					<TableRow key={index}>
						<TableCell className="font-medium">{investment.name}</TableCell>
						<TableCell className="text-center">
							{formatCurrency(investment.price)}
						</TableCell>
						<TableCell className="text-center">{investment.quantity}</TableCell>
						<TableCell className="text-center">
							{formatCurrency(investment.value)}
						</TableCell>
						<TableCell className="text-right">
							<div
								className={`font-medium ${
									investment.totalGainLoss >= 0
										? 'text-green-400'
										: 'text-red-400'
								}`}
							>
								{investment.totalGainLoss >= 0 ? '+' : ''}
								{formatCurrency(investment.totalGainLoss)}
							</div>
							<div
								className={`text-sm ${
									investment.percentageChange >= 0
										? 'text-green-400'
										: 'text-red-400'
								}`}
							>
								{formatPercentage(investment.percentageChange)}
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default InvestmentsTable;
