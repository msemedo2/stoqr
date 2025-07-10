import { ReactNode } from 'react';
import { Settings } from 'lucide-react';
import DefaultModal from '../shared/DefaultModal/DefaultModal';

// Use the same ListItem interface from DefaultModal
interface ListItem {
	[key: string]: string;
}

interface BankFormData {
	bankName: string;
	displayColor: string;
	accounts: ListItem[];
}

interface BankAccountModalProps {
	trigger?: ReactNode;
	title?: string;
	defaultData?: Partial<BankFormData>;
	onSave?: (data: BankFormData) => void;
	onCancel?: () => void;
}

const BankAccountModal: React.FC<BankAccountModalProps> = ({
	trigger,
	title = 'Edit Bank Account',
	defaultData = {},
	onSave,
	onCancel,
}) => {
	const fields = [
		{
			type: 'text' as const,
			name: 'bankName',
			label: 'Bank Name',
			placeholder: 'Enter bank name',
			defaultValue: defaultData.bankName || 'ING',
		},
		{
			type: 'select' as const,
			name: 'displayColor',
			label: 'Display Color',
			placeholder: 'Select a color',
			defaultValue: defaultData.displayColor || 'blue',
			options: [
				{ value: 'blue', label: 'Blue' },
				{ value: 'orange', label: 'Orange' },
				{ value: 'red', label: 'Red' },
				{ value: 'green', label: 'Green' },
			],
		},
		{
			type: 'dynamic-list' as const,
			name: 'accounts',
			addButtonText: 'Add Account',
			defaultValue: defaultData.accounts || [
				{ type: '', amount: '10,000.00€' },
			],
			fields: [
				{
					type: 'select' as const,
					name: 'type',
					label: 'Account Type',
					placeholder: 'Account Type',
					className: 'flex-1',
					options: [
						{ value: 'current', label: 'Current Account' },
						{ value: 'savings', label: 'Savings Account' },
						{ value: 'term', label: 'Term Deposit' },
						{ value: 'investment', label: 'Investment Account' },
						{ value: 'checking', label: 'Checking Account' },
					],
				},
				{
					type: 'text' as const,
					name: 'amount',
					label: 'Amount',
					placeholder: '0.00€',
					className: 'w-32',
					inputClassName: 'text-right',
				},
			],
		},
	];

	const handleSave = (formData: { [key: string]: string | ListItem[] }) => {
		const bankData: BankFormData = {
			bankName: formData.bankName as string,
			displayColor: formData.displayColor as string,
			accounts: formData.accounts as ListItem[],
		};

		console.log('Bank data to save:', bankData);
		if (onSave) onSave(bankData);
	};

	const handleCancel = () => {
		console.log('Cancel clicked');
		if (onCancel) onCancel();
	};

	return (
		<DefaultModal
			title={title}
			icon={<Settings className="w-5 h-5" />}
			trigger={trigger}
			fields={fields}
			onSave={handleSave}
			onCancel={handleCancel}
		/>
	);
};

export default BankAccountModal;
