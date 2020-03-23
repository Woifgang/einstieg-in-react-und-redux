import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './components/serviceWorker';
import {createStore} from "redux";
import counter from "./reducers/index";
import {Provider} from "react-redux";

// import {BrowserRouter, Route} from 'react-router-dom';


let store = createStore(counter);


ReactDOM.render(
    <Provider store={store}>
        {/*<BrowserRouter>*/}
            {/*<Route path="/servus" component={App}/>*/}
            <App/>
        {/*</BrowserRouter>*/}
    </Provider>
    ,
    document.getElementById('root')
)
;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
