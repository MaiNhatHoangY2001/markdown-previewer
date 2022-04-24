import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { EditorProvider } from './components/Context/EditorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<EditorProvider>
			<App />
		</EditorProvider>
	</React.StrictMode>
);
