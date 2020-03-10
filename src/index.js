import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './components/serviceWorker';
import {createStore} from "redux";
import counter from "./reducers/index";
import {incrementCounter} from "./actions/index";

let store = createStore(counter);
console.log(store.getState());
store.dispatch(incrementCounter());
console.log(store.getState());



let render =()=>{
    ReactDOM.render(
        <App
            value={store.getState()}
            onIncrement={() => {
                store.dispatch(incrementCounter());
            }}
        />,
        document.getElementById('root')
    );
}
render();
store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
