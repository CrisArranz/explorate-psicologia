import { HtmlElementMap, type HtmlContainerElements } from 'types';

/**
 * Props para el componente Container.
 * @interface ContainerProps
 * @property {HtmlContainerElements} [as='DIV'] - Elemento HTML a renderizar (div, section, article, etc.).
 * @property {string} [className] - Clases TailwindCSS adicionales para el contenedor.
 * @property {React.ReactNode} [children] - Contenido hijo a renderizar dentro del contenedor.
 */
interface ContainerProps {
	as?: HtmlContainerElements;
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
}

/**
 * Componente Container - Contenedor genérico flexible.
 *
 * @component
 * @description Componente envoltorio versátil que puede renderizar diferentes elementos contenedores.
 * Útil para agrupar contenido con semántica HTML variable.
 *
 * @param {ContainerProps} props - Propiedades del componente
 * @returns {React.ReactElement} Contenedor renderizado
 *
 * @example
 * <Container as="DIV" />
 *
 * @example
 * <Container as="SECTION" />
 *
 * @example
 * <Container as="ARTICLE" />
 */
export const Container = ({
	as = 'DIV',
	className = '',
	children,
	style,
}: ContainerProps) => {
	const Tag = HtmlElementMap[as];
	return (
		<Tag className={className} style={style}>
			{children}
		</Tag>
	);
};
