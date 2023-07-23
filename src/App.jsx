import React, {Component} from "react";
import NavBar from "./NavBar";
import MainComponent from "./MainContent"

export default class App extends Component{
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <MainComponent />
            </React.Fragment>
        );
    }
}
