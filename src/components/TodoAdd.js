// import {Component} from "react";
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';


class TodoAdd extends Component {


    constructor(props) {
        super(props);

        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.onTodoInputChange = this.onTodoInputChange.bind(this);

        this.state = {
            newTodo: ""
        }
    }

    onTodoAdd() {
        this.props.onAdd(this.state.newTodo);
    }

    onTodoInputChange(event) {
        // console.log(event.target.value);
        this.setState({
            newTodo: event.target.value
        })
    }


    render() {
        let button = null;

        if (this.state.newTodo != "") {
            button = (
                <button onClick={this.onTodoAdd}>Todo hinzufügen ({this.state.newTodo.length})</button>
            );
        }

        return (
            <Panel title="Todo hinzufügen">
                <input type="text" onChange={this.onTodoInputChange} value={this.state.newTodo}/>
                {button}
            </Panel>
        );
    }
}

TodoAdd.propType ={
  onAdd: PropTypes.func.isRequired
};

export default TodoAdd;