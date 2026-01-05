import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { DarkProvider, UserProvider } from './contexts';
import { Router } from './ui/router/router.tsx';
import { Topbar } from './components/molecules/index.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UserProvider>
			<DarkProvider>
				<Topbar />
				<Router />
			</DarkProvider>
		</UserProvider>
	</StrictMode>
);
