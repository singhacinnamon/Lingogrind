import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Adjust the import path as needed

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app') // Replace 'root' with the ID of your HTML element
);