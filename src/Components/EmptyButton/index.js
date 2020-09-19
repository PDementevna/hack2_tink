import React from 'react';
import './style.css'



export default class Button extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <button className={"button-placeholder-gray"}>

            </button>
        );
    }
}