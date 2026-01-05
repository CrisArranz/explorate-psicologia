import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { DarkProvider, UserProvider } from 'contexts';
import { Router } from 'ui/router/router';
import { Topbar } from 'components/molecules';

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
