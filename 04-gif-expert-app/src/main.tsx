import React from 'react'
import ReactDOM from 'react-dom/client'
/*-------- 03-counter-app-vite --------*/
// import App from './App.tsx'
// import './index.css'
/*-------- 04-gif-expert-app --------*/
import { GifExpertApp } from './GifExpertApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <GifExpertApp />
  </React.StrictMode>,
)
