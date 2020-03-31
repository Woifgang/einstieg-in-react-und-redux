import React, {Component} from "react";
import {connect} from 'react-redux';
import Panel from "./Panel";
import {testApiSearch} from "../actions";

class TestApiResults extends Component {

    componentDidMount() {
        this.props.onPerformSearch(this.props.match.params.search);
    }

    render() {

        if (this.props.response) {
            console.log(this.props.response.body);
            console.log(this.props.response.body.subject);
        }

        return (
            <Panel title={"Api results from api.aschenbrenner-media.de"}>
                {this.props.response ? (
                    <div>
                        <h1>{this.props.response.body.subject}</h1>
                        <p>{this.props.response.body.body}</p>
                    </div>
                ) : null}
            </Panel>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        response: state.testApi
    }
}

let mapDispatchToProps = {
    onPerformSearch: testApiSearch
}

let TestApiResultContainer = connect(mapStateToProps, mapDispatchToProps)(TestApiResults);

export default TestApiResultContainer;