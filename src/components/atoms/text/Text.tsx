import React from 'react';
import { HtmlElementMap, type HtmlTextElements } from 'types';

/**
 * Props para el componente Text.
 * @interface TextProps
 * @property {string} content - Contenido de texto a renderizar.
 * @property {string} [className] - Clases CSS adicionales para personalizar el texto.
 * @property {HtmlTextElements} [as='PARAGRAPH'] - Elemento HTML a renderizar (p, span, label, etc.).
 * @property {string} [htmlFor] - Atributo 'for' para elementos label.
 */
interface TextProps {
	content: string;
	className?: string;
	as?: HtmlTextElements;
	htmlFor?: string;
}

/**
 * Componente Text - Renderiza un elemento de texto flexible.
 *
 * @component
 * @description Componente versátil para renderizar texto en diferentes elementos HTML.
 * Soporta párrafos, spans, labels y otros elementos de texto.
 *
 * @param {TextProps} props - Propiedades del componente
 * @returns {React.ReactElement} Elemento de texto renderizado
 *
 * @example
 * <Text content="Hola mundo" />
 *
 * @example
 * <Text as="SPAN" content="Texto inline" className="text-blue-500" />
 *
 * @example
 * <Text as="LABEL" htmlFor="input-id" content="Email" />
 */
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
