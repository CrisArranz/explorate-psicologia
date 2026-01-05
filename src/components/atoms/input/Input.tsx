import { HtmlElementMap, type HtmlInputElements } from 'types';
import { Text } from 'components/atoms';

/**
 * Props para el componente Input.
 * @interface InputProps
 * @property {string} label - Etiqueta que se muestra encima del input con animación en focus.
 * @property {string} input - Identificador del input (id y name).
 * @property {string} [type] - Tipo de input (text, password, email, etc.).
 * @property {HtmlInputElements} [as='INPUT'] - Elemento HTML a renderizar.
 */
interface InputProps {
	label: string;
	as?: HtmlInputElements;
	input: string;
	type?: string;
}

/**
 * Componente Input - Campo de entrada con label flotante animado.
 *
 * @component
 * @description Input con efecto de label flotante que sube al hacer focus o cuando el input es válido.
 * Utiliza Tailwind CSS para estilos y peer-focus para la interacción entre input y label.
 * Incluye validación nativa con atributo required.
 *
 * @param {InputProps} props - Propiedades del componente
 * @returns {React.ReactElement} Input renderizado con label flotante
 *
 * @example
 * <Input label="Email" input="email" type="email" />
 *
 * @example
 * <Input label="Contraseña" input="password" type="password" />
 *
 * @example
 * <Input label="Usuario" input="username" type="text" />
 */
export const Input = ({ label, as = 'INPUT', input, type }: InputProps) => {
	const InputElement = HtmlElementMap[as];
	return (
		<div className="relative *:focus:outline-none">
			<InputElement
				value=""
				id={input}
				name={input}
				type={type}
				required
				autoComplete="off"
				className="peer block w-72 h-10 bg-transparent border border-gray-300 outline-none transition-all duration-300 ease px-[15px] focus:border-blue-500"
			/>
			<Text
				htmlFor={input}
				as="LABEL"
				content={label}
				className="absolute cursor-text z-2 text-xs left-2.5 top-[13px] font-bold pointer-events-none text-gray-400 bg-white px-2.5 transition-all duration-300 ease peer-focus:text-[11px] peer-focus:top-[-5px] peer-focus:text-blue-500 peer-valid:text-[11px] peer-valid:top-[-5px]"
			/>
		</div>
	);
};
