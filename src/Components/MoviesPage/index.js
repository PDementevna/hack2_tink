import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import './style.css';
import Movie from "./Movie";

//I can import only this way todo: rewrite it please, if u know how make it better

import AvengersEndGame from "./Movie/data/home_movies/1_home.jpg";
import JohnWickParabellum from "./Movie/data/home_movies/2_home.jpg";
import Jocker from "./Movie/data/home_movies/3_home.jpg";
import Parasite from "./Movie/data/home_movies/4_home.jpg";
import SpiderMan from "./Movie/data/home_movies/5_home.jpg";
import T34 from "./Movie/data/home_movies/6_home.jpg";
import Greenland from "./Movie/data/cinema_movies/1_cinema.jpg";
import Ice2 from "./Movie/data/cinema_movies/2_cinema.jpg";
import Tenet from "./Movie/data/cinema_movies/3_cinema.jpg";
import TheNewMurants from "./Movie/data/cinema_movies/4_cinema.jpg";
import Unhinged from "./Movie/data/cinema_movies/5_cinema.jpg";
import GoalkeeperOfGalaxy from "./Movie/data/cinema_movies/6_cinema.jpg";

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
                <p className="region">Москва</p>
                <h1 className="services">Что смотреть?
                    <span className="fa-layers fa-fw fa-pull-right voice-widget fa-lg">
                            <FontAwesomeIcon icon="circle" color="#4a2cf0" />
                            <FontAwesomeIcon color="#ffffff" icon="microphone" transform="shrink-6"/>
                        </span>
                </h1>
                <div className="search-bar"><FontAwesomeIcon pull="left" color="#7f7e84" icon="search" /> Поиск</div>
                {/*<div className="widget-container">*/}

                {/*    <div className="button-holder">Movie</div>*/}
                {/*    <div className="button-holder">placeholder-widget</div>*/}
                {/*    <div className="button-holder">placeholder-widget</div>*/}
                {/*    <div className="button-holder">placeholder-widget</div>*/}

                <h2 className="category_name">В кино</h2>
                <div className="movies_container">
                    <Movie image={Greenland} name="Гринлэнд"/>
                    <Movie image={Unhinged} name="Неистовый"/>
                    <Movie image={TheNewMurants} name="Новые мутанты"/>
                </div>
                <h2 className="category_name">В сети</h2>
                <div className="movies_container">
                    <Movie image={AvengersEndGame} name="Мстители"/>
                    <Movie image={JohnWickParabellum} name="Джон Уик"/>
                    <Movie image={Jocker} name="Джокер"/>
                </div>


                {/*</div>*/}
                {/*<h3 className="help"><FontAwesomeIcon icon={faQuestionCircle} color="#4a2cf0"/> Выберете доступный совет</h3>*/}
            </div>
        );
    }
}