import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from  "./FirstApp";

const rootElement = document.querySelector('#root');

if(rootElement !== null){
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <FirstApp />
            {/* <HelloWorldApp /> */}
        </React.StrictMode>    
    );
}
else
    console.log('Error');

