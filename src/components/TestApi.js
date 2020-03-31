import React, {Component} from "react";
import Panel from "./Panel";
import {Redirect} from "react-router";


class TestApi extends Component {


    constructor(props) {

        super(props);

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            searchNumber: "",
            searchButtonClicked: false
        }
    }

    onSearchSubmit() {
        this.setState({
            searchButtonClicked: true
        })
    }

    onInputChange(event) {
        console.log(event.target.value);
        let value = event.target.value;

        if (value <= 0) {
            this.setState({
                searchNumber: 0
            })
        } else {
            this.setState({
                // searchNumber: event.target.value
                searchNumber: value
            })
        }

        // this.setState({
        //     // searchNumber: event.target.value
        //     searchNumber: value
        // })
    }


    render() {
        return (
            <Panel title={"Test-Api api.aschenbrenner-media.de"}>
                {(this.state.searchButtonClicked === true ? (
                        <Redirect to={"/testApi-results/" + this.state.searchNumber}/>) : null
                )}

                <input type="number" onChange={this.onInputChange} value={this.state.searchNumber}/>
                <button onClick={this.onSearchSubmit}>Suche eintrag</button>
            </Panel>
        );
    }

}

export default TestApi;