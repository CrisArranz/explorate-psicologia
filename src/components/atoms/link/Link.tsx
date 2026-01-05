import { HtmlElementMap, type HtmlLinkElements } from 'types';

/**
 * Tipos de destino soportados para enlaces.
 * @type {'_self' | '_blank' | '_parent' | '_top'}
 */
type Target = '_self' | '_blank' | '_parent' | '_top';

/**
 * Props para el componente Link.
 * @interface LinkProps
 * @property {string} href - URL o ruta del enlace.
 * @property {string} [text] - Texto del enlace. Si no se proporciona, usa children.
 * @property {Target} [target='_self'] - Cómo abrir el enlace (misma pestaña, nueva pestaña, etc.).
 * @property {HtmlLinkElements} [as='A'] - Elemento HTML a renderizar.
 * @property {React.ReactNode} [children] - Contenido del enlace (puede ser texto o elementos).
 */
interface LinkProps {
	href: string;
	text?: string;
	target?: Target;
	as?: HtmlLinkElements;
	children?: React.ReactNode;
}

/**
 * Componente Link - Renderiza un enlace con flexibilidad de contenido.
 *
 * @component
 * @description Componente de enlace que soporta texto directo o children como contenido.
 * Configurable con target y diferentes elementos HTML.
 *
 * @param {LinkProps} props - Propiedades del componente
 * @returns {React.ReactElement} Elemento link renderizado
 *
 * @example
 * <Link href="/home" text="Inicio" />
 *
 * @example
 * <Link href="https://example.com" target="_blank" text="Visitar sitio" />
 *
 * @example
 * <Link href="/profile"><Icon /> Mi perfil</Link>
 */
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
