import React, {Component} from 'react';
import './App.css';

import TodoList from './TodoList';
import Clickcounter from "./Clickcounter";
import Home from "./Home";
import Navigation from "./Navigation";
import Wikipedia from "./Wikipedia";

import {HashRouter, Route} from 'react-router-dom';
import WikipediaResults from "./WikipediaResults";
import TestApi from "./TestApi";
import TestApiResults from "./TestApiResults";


class App extends Component {

    render() {
        return (
            <HashRouter>
                <div className="App">

                    <Navigation></Navigation>

                    <Route exact path="/" component={Home}/>
                    <Route path="/todo" component={TodoList}/>
                    <Route path="/click" component={Clickcounter}/>
                    <Route path="/wikipedia" component={Wikipedia}/>
                    <Route path="/wikipedia-results/:search" component={WikipediaResults}/>
                    <Route path="/testApi" component={TestApi}></Route>
                    <Route path="/testApi-results/:search" component={TestApiResults}></Route>
                </div>
            </HashRouter>
        );
    }
}



export default App;
