import React from 'react';
import './style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default class Page404 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1 className={"page-caption"}>Страница не найдена</h1>
                <h1 className={"page404"}>

                    <FontAwesomeIcon color="red" icon="dollar-sign" size={"2x"} spin/> &emsp;
                    <FontAwesomeIcon color="red" icon="ruble-sign" size={"2x"} spin/> &emsp;
                    <FontAwesomeIcon color="red" icon="euro-sign" size={"2x"} spin/>
                </h1>
            </div>
        );
    }
}