import React, {Component} from 'react';
import './App.css';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import {incrementCounter} from "../actions";
import {connect} from "react-redux";

import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo: [
                // {id: 1, titlasdfe: "Obst kaufen"},
                //     // {id: 2, title: "Banane kaufen"},
                //     // {id: 3, title: "Kirsch kaufen"},
            ]

        }

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(title) {
        let todos = this.state.todo;
        let maxId = 0;

        for (let todo of todos) {
            if (todo.id > maxId) {
                maxId = todo.id;
            }
        }

        todos.push({id: maxId + 1, title: title});

        this.setState({
            todo: todos
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <h1>Todo-List</h1>
                    <Route path="/todo" component={TodoList}/>
                    <Route path="/click" component={TodoAdd}/>
                    {/*<TodoList todo={this.state.todo}></TodoList>*/}
                    <br/>
                    {/*<TodoAdd onAdd={this.addTodo}></TodoAdd>*/}
                    {/*<button onClick={this.addTodo}>Add Todo</button>*/}
                    <h1>Klickzähler: {this.props.value}</h1>
                    <button onClick={this.props.onIncrement}>zähle hoch</button>
                </div>
            </BrowserRouter>
        );
    }
}


let mapStateToProps = function (state) {
    return {
        value: state.counter
    };
}

let mapDispatchToProbs = {
    onIncrement: incrementCounter
}

let AppContainer = connect(mapStateToProps, mapDispatchToProbs)(App);


export default AppContainer;
