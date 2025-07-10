import { ReactNode } from 'react';
import { TrendingUp } from 'lucide-react';
import DefaultModal from '../shared/DefaultModal/DefaultModal';
// import DefaultModal from './DefaultModal';
// import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ListItem {
	[key: string]: string;
}

interface InvestmentFormData {
	transactionType: string;
	ticker: string;
	companyName: string;
	quantity: string;
	price: string;
	fees: string;
	notes: string;
}

interface InvestmentModalProps {
	trigger?: ReactNode;
	title?: string;
	defaultData?: Partial<InvestmentFormData>;
	onSave?: (data: InvestmentFormData) => void;
	onCancel?: () => void;
}

const InvestmentModal: React.FC<InvestmentModalProps> = ({
	trigger,
	title = 'Add Investment Transaction',
	defaultData = {},
	onSave,
	onCancel,
}) => {
	const fields = [
		{
			type: 'select' as const,
			name: 'transactionType',
			label: 'Transaction Type',
			placeholder: 'Select transaction type',
			defaultValue: defaultData.transactionType || 'buy',
			options: [
				{ value: 'buy', label: '📈 Buy' },
				{ value: 'sell', label: '📉 Sell' },
				{ value: 'dividend', label: '💰 Dividend' },
				{ value: 'split', label: '🔄 Stock Split' },
			],
		},
		{
			type: 'text' as const,
			name: 'ticker',
			label: 'Ticker Symbol',
			placeholder: 'e.g. AAPL, MSFT, TSLA',
			defaultValue: defaultData.ticker || '',
		},
		{
			type: 'text' as const,
			name: 'companyName',
			label: 'Company Name',
			placeholder: 'e.g. Apple Inc.',
			defaultValue: defaultData.companyName || '',
		},
		{
			type: 'text' as const,
			name: 'quantity',
			label: 'Quantity',
			placeholder: '0',
			defaultValue: defaultData.quantity || '',
			inputClassName: 'text-right',
		},
		{
			type: 'text' as const,
			name: 'price',
			label: 'Price per Share',
			placeholder: '0.00€',
			defaultValue: defaultData.price || '',
			inputClassName: 'text-right',
		},
		{
			type: 'text' as const,
			name: 'fees',
			label: 'Transaction Fees',
			placeholder: '0.00€',
			defaultValue: defaultData.fees || '0.00',
			inputClassName: 'text-right',
		},
		{
			type: 'text' as const,
			name: 'notes',
			label: 'Notes (Optional)',
			placeholder: 'Any additional notes...',
			defaultValue: defaultData.notes || '',
		},
	];

	const handleSave = (formData: { [key: string]: string | ListItem[] }) => {
		const investmentData: InvestmentFormData = {
			transactionType: formData.transactionType as string,
			ticker: formData.ticker as string,
			companyName: formData.companyName as string,
			quantity: formData.quantity as string,
			price: formData.price as string,
			fees: formData.fees as string,
			notes: formData.notes as string,
		};

		console.log('Investment data to save:', investmentData);
		if (onSave) onSave(investmentData);
	};

	const handleCancel = () => {
		console.log('Cancel clicked');
		if (onCancel) onCancel();
	};

	return (
		<DefaultModal
			title={title}
			icon={<TrendingUp className="w-5 h-5" />}
			trigger={trigger}
			fields={fields}
			onSave={handleSave}
			onCancel={handleCancel}
		/>
	);
};

export default InvestmentModal;
