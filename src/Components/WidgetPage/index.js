import React from 'react';
import './style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import Widget from "./Widget";
import book_image from "./data/book.svg";
import film_image from "./data/film.svg";
import invest_image from "./data/investments.svg";
import cash_image from "./data/cashback.svg";


// import film_img from ".data/film.svg"


export default class WidgetPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <p className="region">Москва</p>
                <h1 className="services">Советы
                    <span className="fa-layers fa-fw fa-pull-right voice-widget fa-lg">
                            <FontAwesomeIcon icon="circle" color="#4a2cf0"/>
                            <FontAwesomeIcon color="#ffffff" icon="microphone" transform="shrink-6"/>
                        </span>
                </h1>
                <div className="search-bar"><FontAwesomeIcon pull="left" color="#7f7e84" icon="search"/> Поиск</div>
                <div className="widget-container">
                    <Widget link={"/save_money"} image={invest_image} text={"Как копить"}/>
                    <Widget link={"/movies"} image={film_image} text={"Что смотреть"}/>
                    <Widget link={"/books"} image={book_image} disabled={true} text={"Что читать"}/>
                    <Widget link={"/articles"} image={cash_image} disabled={true} text={"Статьи"}/>
                </div>
                <h3 className="help"><FontAwesomeIcon icon={faQuestionCircle} color="#4a2cf0"/> Выберете доступный совет
                </h3>
            </div>
        );
    }
}