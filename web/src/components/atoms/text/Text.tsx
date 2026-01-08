import React from 'react';
import { HtmlElementMap, type HtmlTextElements } from 'types';

/**
 * Props para el componente Text.
 * @interface TextProps
 * @property {string} [className] - Clases CSS adicionales para personalizar el texto.
 * @property {HtmlTextElements} [as='PARAGRAPH'] - Elemento HTML a renderizar (p, span, label, etc.).
 * @property {string} [htmlFor] - Atributo 'for' para elementos label.
 * @property {React.ReactNode} [children] - Contenido hijo alternativo (si se prefiere sobre content).
 */
interface TextProps {
	className?: string;
	as?: HtmlTextElements;
	htmlFor?: string;
	children?: React.ReactNode;
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
	as = 'PARAGRAPH',
	className = '',
	htmlFor,
	children,
}) => {
	const Tag = HtmlElementMap[as];
	return (
		<Tag {...(className && { className })} {...(htmlFor && { for: htmlFor })}>
			{children}
		</Tag>
	);
};
