import React from 'react';
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {addMessage, addPost, RootStateType, updateNewMessageText, updateNewPostText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/State";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    store={store}
                    // dispatch={store.dispatch.bind(store)}

                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

