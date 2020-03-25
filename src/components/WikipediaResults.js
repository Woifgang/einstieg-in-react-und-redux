import React, {Component} from "react";
import {connect} from 'react-redux';
import Panel from "./Panel";
import {wikipediaSearch} from "../actions";


class WikipediaResults extends Component {

    componentDidMount() {
        // this.props.onPerformSearch("Berlin");
        this.props.onPerformSearch(this.props.match.params.search);
    }

    render() {
        if (this.props.response) {
            console.log(this.props.response.body.query.search);
        }
        return (

            <Panel title={"Wikipedia Results of " + this.props.match.params.search}>
                {/*<div>{JSON.stringify(this.props.response)}</div>*/}
                {(this.props.response ? (
                    <div>
                        {this.props.response.body.query.search.map((item) => {
                                return (
                                    <Panel title={item.title}>
                                        <div dangerouslySetInnerHTML={{__html: item.snippet}}></div>
                                    </Panel>
                                )
                            }
                        )}
                    </div>
                ) : null)}
            </Panel>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        response: state.wikipedia
    };
}

let mapDispatchToProps = {
    onPerformSearch: wikipediaSearch
}

let WikipediaResultsContainer = connect(mapStateToProps, mapDispatchToProps)(WikipediaResults);

export default WikipediaResultsContainer;