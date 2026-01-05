import { HtmlElementMap, type HtmlLinkElements } from 'types';

type Target = '_self' | '_blank' | '_parent' | '_top';

interface LinkProps {
	href: string;
	text?: string;
	target?: Target;
	as?: HtmlLinkElements;
	children?: React.ReactNode;
}

export const Link = ({
	href,
	text,
	target = '_self',
	as = 'A',
	children,
}: LinkProps) => {
	const Link = HtmlElementMap[as];
	if (!text) {
		return (
			<Link href={href} target={target}>
				{children}
			</Link>
		);
	}

	return (
		<Link href={href} target={target}>
			{text}
		</Link>
	);
};
