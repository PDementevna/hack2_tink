import React from 'react';
import './style.css'


export default class SaveMoneyContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={"save-money-container"}>
                <h2 className={"save-money-caption"}>{this.props.data.title}</h2>
                <img className={"save-money"} src={this.props.data.image} alt={this.props.data.shop}/>
                <p className={"save-money"}>Можно<br/>сэконоить</p>
                <h3 className={"save-money-amount"}>{this.props.data.amount}₽</h3>
                <h3 className={"save-money-shop"}>{this.props.data.shop}</h3>
            </div>

        );
    }
}