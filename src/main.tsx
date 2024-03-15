import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Helmet from 'react-helmet';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Helmet>
        <meta http-equiv="Cross-Origin-Resource-Policy" content="cross-origin" />
      </Helmet>
    <App />
  </React.StrictMode>,
)
