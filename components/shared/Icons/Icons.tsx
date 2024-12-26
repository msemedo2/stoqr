import Image, { ImageProps } from 'next/image';
import ICONS from '.';

interface IconProps extends Omit<ImageProps, 'alt' | 'src'> {
	type: keyof typeof ICONS;
	alt?: string;
}

const Icon: React.FC<IconProps> = ({ type, alt, ...props }) => {
	const iconEl = ICONS[type];
	return <Image {...props} src={iconEl} alt={alt || ''} />;
};

export default Icon;
