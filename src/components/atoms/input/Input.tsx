import { HtmlElementMap, type HtmlInputElements } from 'types';
import { Text } from 'components/atoms';

interface InputProps {
	label: string;
	as?: HtmlInputElements;
	input: string;
	placeholder?: string;
	type?: string;
}

export const Input = ({
	label,
	as = 'INPUT',
	input,
	placeholder,
	type,
}: InputProps) => {
	const InputElement = HtmlElementMap[as];
	return (
		<div>
			<Text htmlFor={input} as="LABEL" content={label} />
			<InputElement
				value=""
				id={input}
				name={input}
				placeholder={placeholder}
				type={type}
			/>
		</div>
	);
};
