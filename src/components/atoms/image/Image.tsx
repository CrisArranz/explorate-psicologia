import { HtmlElementMap, type HtmlImageElements } from '../../types';

interface ImageProps {
	src?: string;
	alt?: string;
	className?: string;
	as?: HtmlImageElements;
}

export const Image = ({
	src = '',
	alt = '',
	className = '',
	as = 'IMG',
}: ImageProps) => {
	const Image = HtmlElementMap[as];
	return <Image src={src} alt={alt} className={className} />;
};
