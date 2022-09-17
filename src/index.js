// import 'datatables.net-responsive';
import React, {createContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './styles/styles.scss'
import App from './App';

// Store imports
// import MainStore from "./store/auth-store"; (Example)

// JQ
window.$ = window.jQuery = require('jquery');

// Store instances
// const authStore = new MainStore(); (Example)

// Stores merge in context
const storeList = {
    // authStore, (Example)
};
export const Context = createContext({
   ...storeList
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Stores gives
    <Context.Provider value={{...storeList}}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>
);
