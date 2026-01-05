import React from 'react';
import { htmlElementMap, type HtmlTextElements } from '../../types';

interface Text {
	content: string;
	className?: string;
	as?: HtmlTextElements;
}

export const Text: React.FC<Text> = ({
	content,
	as = 'PARAGRAPH',
	className = '',
}) => {
	const Tag = htmlElementMap[as];
	return <Tag className={className}>{content}</Tag>;
};
