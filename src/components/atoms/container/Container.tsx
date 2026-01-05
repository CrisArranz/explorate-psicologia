import { HtmlElementMap, type HtmlContainerElements } from 'types';

interface ContainerProps {
	as?: HtmlContainerElements;
}

export const Container = ({ as = 'DIV' }: ContainerProps) => {
	const Tag = HtmlElementMap[as];
	return <Tag>Container Component</Tag>;
};
