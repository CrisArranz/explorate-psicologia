import { HtmlElementMap, type HtmlListElements } from 'types';

/**
 * Props para cada item de la lista.
 * @interface ItemProps
 * @property {string | React.ReactNode} content - Contenido del item (texto o elementos).
 * @property {Extract<HtmlListElements, 'LI'>} [as='LI'] - Elemento HTML para el item.
 * @property {string} [href] - URL opcional para el item.
 * @property {string} [className] - Clases CSS adicionales.
 */
interface ItemProps {
	content: string | React.ReactNode;
	as?: Extract<HtmlListElements, 'LI'>;
	href?: string;
	className?: string;
}

/**
 * Props para el componente List.
 * @interface ListProps
 * @property {Extract<HtmlListElements, 'UL' | 'OL'>} [as='UL'] - Tipo de lista (ul o ol).
 * @property {ItemProps[]} items - Array de items a renderizar en la lista.
 * @property {string} [className] - Clases CSS adicionales para la lista.
 * @property {string} key - Key único para la lista (usado en el render de items).
 */
interface ListProps {
	as?: Extract<HtmlListElements, 'UL' | 'OL'>;
	items: ItemProps[];
	className?: string;
	$key: string;
}

/**
 * Componente List - Renderiza una lista (ul u ol) con items.
 *
 * @component
 * @description Componente flexible para listas que renderiza items con contenido variable.
 * Soporta listas desordenadas y ordenadas.
 *
 * @param {ListProps} props - Propiedades del componente
 * @returns {React.ReactElement} Lista renderizada con items
 *
 * @example
 * <List as="UL" key="menu" items={[
 *   { content: "Inicio" },
 *   { content: "Acerca de" },
 *   { content: "Contacto" }
 * ]} />
 *
 * @example
 * <List as="OL" key="steps" className="list-decimal" items={[
 *   { content: "Paso 1" },
 *   { content: "Paso 2" },
 *   { content: "Paso 3" }
 * ]} />
 */
export const List = ({ as = 'UL', items, className = '', $key }: ListProps) => {
	const List = HtmlElementMap[as];
	return (
		<List className={className} key={$key}>
			{items.map(({ as = 'LI', ...item }, index) => {
				const Item = HtmlElementMap[as];
				return <Item key={`${$key}-${index}`}>{item.content}</Item>;
			})}
		</List>
	);
};
