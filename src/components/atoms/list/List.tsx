import { HtmlElementMap, type HtmlListElements } from 'types';

interface ItemProps {
	content: string | React.ReactNode;
	as?: Extract<HtmlListElements, 'LI'>;
	href?: string;
	className?: string;
}

interface ListProps {
	as?: Extract<HtmlListElements, 'UL' | 'OL'>;
	items: ItemProps[];
	className?: string;
	key: string;
}

export const List = ({ as = 'UL', items, className = '', key }: ListProps) => {
	const List = HtmlElementMap[as];
	return (
		<List className={className}>
			{items.map(({ as = 'LI', ...item }, index) => {
				const Item = HtmlElementMap[as];
				return <Item key={`${key}-${index}`}>{item.content}</Item>;
			})}
		</List>
	);
};
