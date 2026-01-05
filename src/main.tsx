import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { DarkProvider } from './contexts/dark/dark.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<DarkProvider>
			<App />
		</DarkProvider>
	</StrictMode>
);
