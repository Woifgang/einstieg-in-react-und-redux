import React, {Component} from "react";
import Panel from "./Panel";
import {Redirect} from "react-router";


class Wikipedia extends Component {


    constructor(props,) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);

        this.state = {
            searchText: "",
            searchButtonClicked: false
        }
    }

    onSearchSubmit() {
        this.setState({
            searchButtonClicked: true
        })
    }

    onInputChange(event) {
        // console.log(event.target.value);
        this.setState({
            searchText: event.target.value
        })
    }

    render() {
        return (
            <Panel title="Wikpedia API">
                {(this.state.searchButtonClicked === true ? (
                    <Redirect to={"/wikipedia-results/" + this.state.searchText}/>) : null)}

                <input type="text" onChange={this.onInputChange} value={this.state.searchText}/>

                <button onClick={this.onSearchSubmit}>Wikipedia Req</button>
            </Panel>
        );
    }
}

export default Wikipedia;