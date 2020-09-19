import React from 'react';
import './style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";



export default class WidgetPage extends React.Component {
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
                <p className="region">Москва</p>
                <h1 className="services">Советы
                    <span className="fa-layers fa-fw fa-pull-right voice-widget fa-lg">
                            <FontAwesomeIcon icon="circle" color="#4a2cf0" />
                            <FontAwesomeIcon color="#ffffff" icon="microphone" transform="shrink-6"/>
                        </span>
                </h1>
                <div className="search-bar"><FontAwesomeIcon pull="left" color="#7f7e84" icon="search" /> Поиск</div>
                <div className="widget-container">
                    <div className="button-holder">placeholder-widget</div>
                    <div className="button-holder">placeholder-widget</div>
                    <div className="button-holder">placeholder-widget</div>
                    <div className="button-holder">placeholder-widget</div>


                </div>
                <h3 className="help"><FontAwesomeIcon icon={faQuestionCircle} color="#4a2cf0"/> Выберете доступный совет</h3>
            </div>
        );
    }
}