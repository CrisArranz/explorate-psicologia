import { createContext } from 'react';

export type DarkContextType = {
	isDark: boolean;
	toggleDark: () => void;
};

export const DarkContext = createContext<DarkContextType>({
	isDark: false,
	toggleDark: () => {},
});
