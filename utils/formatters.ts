export const formatNumber = (value: number): string => {
	const formatted = new Intl.NumberFormat('de-DE', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(Math.abs(value));

	return `${value < 0 ? '-' : ''}${formatted}`;
};
