import React, {Component} from "react";
import {Link} from "react-router-dom";

import {connect} from "react-redux";

class Navigation extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todo">Aufgaben ({this.props.todoCounter})</Link></li>
                <li><Link to="/click">Klickzähler ({this.props.counter})</Link></li>
                <li><Link to="/wikipedia">Wikipedia API</Link></li>
                <li><Link to="/testApi">Test API</Link></li>
            </ul>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        counter : state.counter,
        todoCounter : state.todos.length
    }
}

let mapDispatchToProps = {}

let NavigationContainer =  connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer;