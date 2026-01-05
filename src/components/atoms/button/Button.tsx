import { HtmlElementMap } from 'src/components/types';

/**
 * Tipos de botón soportados por el componente Button.
 * @type {'button' | 'submit' | 'reset'}
 */
type ButtonType = 'button' | 'submit' | 'reset';

/**
 * Props para el componente Button.
 * @interface ButtonProps
 * @property {string} label - Texto que se muestra en el botón.
 * @property {ButtonType} [type='submit'] - Tipo de botón (button, submit, reset).
 * @property {string} [className] - Clases CSS adicionales para personalizar el botón.
 */
interface ButtonProps {
	label: string;
	type?: ButtonType;
	className?: string;
}

/**
 * Componente Button - Renderiza un elemento botón con tipo configurable.
 *
 * @component
 * @description Botón genérico que acepta un label, tipo y clases CSS personalizadas.
 * Utiliza el HtmlElementMap para renderizar el elemento BUTTON de forma flexible.
 *
 * @param {ButtonProps} props - Propiedades del componente
 * @returns {React.ReactElement} Elemento button renderizado
 *
 * @example
 * // Botón de submit (por defecto)
 * <Button label="Enviar" />
 *
 * @example
 * // Botón con clase personalizada
 * <Button label="Cancelar" type="button" className="bg-red-500 text-white" />
 *
 * @example
 * // Botón reset
 * <Button label="Limpiar" type="reset" className="bg-gray-300" />
 */
export const Button = ({
	type = 'submit',
	label = 'Default Button',
	className,
}: ButtonProps) => {
	const Button = HtmlElementMap['BUTTON'];
	return (
		<Button type={type} {...(className && { className })}>
			{label}
		</Button>
	);
};
