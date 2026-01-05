import { createContext } from 'react';

export type UserContextType = {
	user: { name: string } | null;
	login: (user: { name: string } | null) => void;
	logout: () => void;
};

export const UserContext = createContext<UserContextType>({
	user: null,
	login: () => {},
	logout: () => {},
});
