import { useState } from 'react';
import { UserContext } from './context';

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<{ name: string } | null>(null);
	const login = (user: { name: string } | null) => setUser(user);
	const logout = () => setUser(null);
	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};
