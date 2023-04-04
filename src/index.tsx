import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from './reducer'
import {Provider} from "react-redux";

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

console.log(store)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
