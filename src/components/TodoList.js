import React, {Component} from 'react';
import './TodoList.css';
import {connect} from 'react-redux';
import {incrementCounter} from "../actions/index";


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

            </Panel>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

let mapDispatchToProps = {}

let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;

