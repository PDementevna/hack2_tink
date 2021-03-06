import React from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import phone from "./IPhone_X_vector.svg"
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faCircle, faDollarSign, faEuroSign,
    faMicrophone,
    faQuestionCircle, faRubleSign,
    faSearch
} from '@fortawesome/free-solid-svg-icons'


import WidgetPage from "./Components/WidgetPage";
import SaveMoneyPage from "./Components/SaveMoneyPage";
import Page404 from "./Components/Page404";
import MoviesPage from "./Components/MoviesPage";


library.add(faMicrophone, faSearch, faCircle, faQuestionCircle, faDollarSign, faEuroSign, faRubleSign)


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initial_path: ""
        };
    }

    componentDidMount() {
        let n = window.location.hostname.search("github");
        if (n !== -1) {
            this.setState({
                initial_path: "/hack2_tink"
            })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="sub-wrapper">
                    <img src={phone} className={"image-back"} alt={"mobile"}/>
                    <div className="phone-wrapper">
                        <Router>
                            <Switch>
                                <Route exact path={this.state.initial_path + "/"}>
                                    <WidgetPage/>
                                </Route>
                                <Route exact path={this.state.initial_path + "/save_money"}>
                                    <SaveMoneyPage/>
                                </Route>
                                <Route exact path={this.state.initial_path + "/movies"}>
                                    <MoviesPage/>
                                </Route>
                                <Route exact path={this.state.initial_path + "/books"}>

                                </Route>
                                <Route exact path={this.state.initial_path + "/articles"}>

                                </Route>
                                <Route exact path={"*"}>
                                    <Page404/>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }

}

