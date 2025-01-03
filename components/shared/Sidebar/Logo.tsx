import Link from 'next/link';
import Icon from '../Icons/Icons';

const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-4">
			<Icon type="LOGO" />
			<span className="text-4xl font-bold font-space-grotesk">Stoqr</span>
		</Link>
	);
};

export default Logo;
