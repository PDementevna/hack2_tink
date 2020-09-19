import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';



export default class MoviesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                text
                {/*<p className="region">Москва</p>*/}
                {/*<h1 className="services">Советы*/}
                {/*    <span className="fa-layers fa-fw fa-pull-right voice-widget fa-lg">*/}
                {/*            <FontAwesomeIcon icon="circle" color="#4a2cf0" />*/}
                {/*            <FontAwesomeIcon color="#ffffff" icon="microphone" transform="shrink-6"/>*/}
                {/*        </span>*/}
                {/*</h1>*/}
                {/*<div className="search-bar"><FontAwesomeIcon pull="left" color="#7f7e84" icon="search" /> Поиск</div>*/}
                {/*<div className="widget-container">*/}
                {/*    <Router>*/}
                {/*        <Link to="/movies">*/}
                {/*            <div className="button-holder">Movie</div>*/}
                {/*        </Link>*/}
                {/*        <div className="button-holder">placeholder-widget</div>*/}
                {/*        <div className="button-holder">placeholder-widget</div>*/}
                {/*        <div className="button-holder">placeholder-widget</div>*/}
                {/*    </Router>*/}


                {/*</div>*/}
                {/*<h3 className="help"><FontAwesomeIcon icon={faQuestionCircle} color="#4a2cf0"/> Выберете доступный совет</h3>*/}
            </div>
        );
    }
}