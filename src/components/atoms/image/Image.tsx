import { HtmlElementMap, type HtmlImageElements } from 'types';

/**
 * Props para el componente Image.
 * @interface ImageProps
 * @property {string} [src] - URL de la imagen a mostrar.
 * @property {string} [alt] - Texto alternativo de la imagen (para accesibilidad).
 * @property {string} [className] - Clases CSS adicionales para personalizar la imagen.
 * @property {HtmlImageElements} [as='IMG'] - Elemento HTML a renderizar.
 */
interface ImageProps {
	src?: string;
	alt?: string;
	className?: string;
	as?: HtmlImageElements;
}

/**
 * Componente Image - Renderiza un elemento de imagen flexible.
 *
 * @component
 * @description Componente para mostrar imágenes con atributos configurables.
 * Soporta diferentes elementos HTML relacionados con imágenes.
 *
 * @param {ImageProps} props - Propiedades del componente
 * @returns {React.ReactElement} Elemento image renderizado
 *
 * @example
 * <Image src="/images/logo.png" alt="Logo" />
 *
 * @example
 * <Image src="/images/photo.jpg" alt="Foto" className="w-full h-auto" />
 */
export const Image = ({
	src = '',
	alt = '',
	className = '',
	as = 'IMG',
}: ImageProps) => {
	const Image = HtmlElementMap[as];
	return <Image src={src} alt={alt} className={className} />;
};
