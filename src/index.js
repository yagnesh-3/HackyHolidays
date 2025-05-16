import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Font Awesome CSS
import 'font-awesome/css/font-awesome.min.css';

// Import Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Fredoka+One&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);