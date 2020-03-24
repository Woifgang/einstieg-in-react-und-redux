import React, {Component} from "react";
import Panel from "./Panel";


class WikipediaResults extends Component {
    render() {
        return (
            <Panel title="Wikipedia Results of ">
                <h1>{this.props.match.params.search}</h1>
            </Panel>
        );
    }
}

export default WikipediaResults;