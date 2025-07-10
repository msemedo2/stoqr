// components/shared/BreakdownTable/BreakdownTable.tsx

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

type Account = {
	label: string;
	amount: string;
};

type Bank = {
	name: string;
	total: string;
	accounts: Account[];
};

interface BreakdownProps {
	banks: Bank[];
}

export function BreakdownTable({ banks }: BreakdownProps) {
	return (
		<div className="card w-full">
			<div className="flex items-end justify-between mb-4">
				<div>
					<h2 className="text-sm font-semibold text-secondary">Bank Name</h2>
					<p className="text-xs text-muted-foreground">Bank Breakdown</p>
				</div>
				<span className="text-sm text-muted-foreground">Total Amount</span>
			</div>

			<Accordion type="multiple" className="w-full">
				{banks.map((bank) => (
					<AccordionItem key={bank.name} value={bank.name}>
						<AccordionTrigger className="flex items-center justify-between px-2 py-3 border-t border-white/10 text-left hover:no-underline">
							<span className="font-medium">{bank.name}</span>
							<span className="text-sm tabular-nums font-mono">
								{bank.total}
							</span>
						</AccordionTrigger>
						<AccordionContent className="px-4 pb-4">
							<ul className="space-y-2 pt-2">
								{bank.accounts.map((account, idx) => (
									<li
										key={idx}
										className="flex items-center justify-between text-sm text-muted-foreground"
									>
										<span>{account.label}</span>
										<span className="font-mono tabular-nums">
											{account.amount}
										</span>
									</li>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
