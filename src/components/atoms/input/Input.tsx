import { HtmlElementMap, type HtmlInputElements } from 'types';
import { Text } from 'components/atoms';

interface InputProps {
	label: string;
	as?: HtmlInputElements;
	input: string;
	type?: string;
}

export const Input = ({ label, as = 'INPUT', input, type }: InputProps) => {
	const InputElement = HtmlElementMap[as];
	return (
		<div className="relative *:focus:outline-none">
			<InputElement
				value=""
				id={input}
				name={input}
				type={type}
				autoComplete="off"
				className="peer block w-96 h-10 bg-transparent border border-gray-300 outline-none transition-all duration-300 ease px-[15px] focus:border-blue-500"
			/>
			<Text
				htmlFor={input}
				as="LABEL"
				content={label}
				className="absolute cursor-text z-2 text-xs left-2.5 top-[13px] font-bold pointer-events-none text-gray-400 bg-white px-[10px] transition-all duration-300 ease peer-focus:text-[11px] peer-focus:top-[-5px] peer-focus:text-blue-500 peer-valid:text-[11px] peer-valid:top-[-5px]"
			/>
		</div>
	);
};
