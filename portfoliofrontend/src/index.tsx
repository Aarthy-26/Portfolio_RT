import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind's default CSS
import './App.css'; // Custom styles
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
