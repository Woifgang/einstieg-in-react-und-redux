import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './components/serviceWorker';
import {createStore} from "redux";
import {connect} from "react-redux";
import counter from "./reducers/index";
import {incrementCounter} from "./actions/index";

let store = createStore(counter);

let mapStateToProps = function (state) {
    return {
        value: state
    };
}

let mapDispatchToProbs = {
    onIncrement: incrementCounter
}

let App2 = connect(mapStateToProps, mapDispatchToProbs)(App);


ReactDOM.render(
    // <App
    //     value={store.getState()}
    //     onIncrement={() => {
    //         store.dispatch(incrementCounter());
    //     }}
    // />,
    <App2 store={store}/>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
