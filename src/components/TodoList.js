import React, {Component} from 'react';
import './TodoList.css';
import {connect} from 'react-redux';
import {addTodo, incrementCounter} from "../actions/index";
import TodoAdd from "./TodoAdd";


import Panel from './Panel';


class TodoList extends Component {

    render() {
        return (
            <Panel title="Todos">
                <ul className="TodoList-li">
                    {this.props.todos.map((todos) => {
                        return (
                            <li key={todos.id}> {todos.title}
                            </li>
                        )
                    })}
                </ul>
                {/*<button onClick={() => {*/}
                {/*    this.props.addTodo("3. todo")*/}
                {/*}}>Hinzufügen*/}
                {/*</button>*/}
                <TodoAdd onAdd={(title) => {
                    this.props.addTodo(title)
                }}/>
            </Panel>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

let mapDispatchToProps = {
    addTodo: addTodo
}

let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;

