import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './routes';
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesApp/>
  </React.StrictMode>,
)
