import React from 'react';
import './style.css'



export default class Page404 extends React.Component {
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
                <h1 className={"page-caption"}>Страница не найдена</h1>
            </div>
        );
    }
}