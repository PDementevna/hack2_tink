import React from 'react';
import './style.css';



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
            <div className="">
                <img className="movie_holder movie_img" src={this.props.image} alt={"movie"}/>
                <h5 className="movie_name">{this.props.name}</h5>
            </div>
        );
    }
}