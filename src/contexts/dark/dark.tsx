import { useState } from 'react';
import { DarkContext } from './darkContext';

export const DarkProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isDark, setIsDark] = useState(false);
	const toggleDark = () => setIsDark(!isDark);
	return (
		<DarkContext.Provider value={{ isDark, toggleDark }}>
			{children}
		</DarkContext.Provider>
	);
};
