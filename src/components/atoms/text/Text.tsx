import React from 'react';
import { HtmlElementMap, type HtmlTextElements } from 'types';

interface TextProps {
	content: string;
	className?: string;
	as?: HtmlTextElements;
	htmlFor?: string;
}

export const Text: React.FC<TextProps> = ({
	content,
	as = 'PARAGRAPH',
	className = '',
	htmlFor,
}) => {
	const Tag = HtmlElementMap[as];
	return (
		<Tag {...(className && { className })} {...(htmlFor && { for: htmlFor })}>
			{content}
		</Tag>
	);
};
