import React, {Component} from 'react';
import './App.css';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

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
            <div className="App">
                <h1>Todo-List</h1>
                <TodoList todo={this.state.todo}></TodoList>
                <br/>
                <TodoAdd onAdd={this.addTodo}></TodoAdd>
                {/*<button onClick={this.addTodo}>Add Todo</button>*/}
                <h1>Klickzähler: {this.props.value}</h1>
                <button onClick={this.props.onIncrement}>zähle hoch</button>
            </div>
        );
    }
}

export default App;
