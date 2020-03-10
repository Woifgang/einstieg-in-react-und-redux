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
                    hier weiter
                </ul>

            </Panel>
        );
    }
}

let mapStateToProps = (state) => {
}

export default TodoList;