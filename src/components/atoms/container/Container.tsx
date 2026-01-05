import { HtmlElementMap, type HtmlContainerElements } from 'types';

/**
 * Props para el componente Container.
 * @interface ContainerProps
 * @property {HtmlContainerElements} [as='DIV'] - Elemento HTML a renderizar (div, section, article, etc.).
 */
interface ContainerProps {
	as?: HtmlContainerElements;
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
export const Container = ({ as = 'DIV' }: ContainerProps) => {
	const Tag = HtmlElementMap[as];
	return <Tag>Container Component</Tag>;
};
