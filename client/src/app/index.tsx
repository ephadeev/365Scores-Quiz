import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { store } from '@/shared/store/model/store.ts';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename='/365Scores-Quiz'>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
