import React, {Component} from "react";

import {incrementCounter} from "../actions";
import {connect} from "react-redux";

class Clickcounter extends Component {
    render() {
        return (
            <div>
                <h1>Klickzähler: {this.props.value}</h1>
                <button onClick={this.props.onIncrement}>zähle hoch</button>
            </div>
        );
    }
}

let mapStateToProps = function (state) {
    return {
        value: state.counter
    };
}

let mapDispatchToProps = {
    onIncrement: incrementCounter
}

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(Clickcounter);

export default AppContainer;