import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import './assets/index.css';
import App from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
  <App></App>
  </>
);