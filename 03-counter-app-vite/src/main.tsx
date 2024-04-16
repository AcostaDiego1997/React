import React from "react";
import ReactDOM from "react-dom/client";
// import { FirstApp } from  "./FirstApp";
import { CounterApp } from  "./CounterApp";
import './styles.css';

const rootElement = document.querySelector('#root');

if(rootElement !== null){
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <CounterApp />
            {/* <FirstApp /> */}
            {/* <HelloWorldApp /> */}
        </React.StrictMode>    
    );
}
else
    console.log('Error');

