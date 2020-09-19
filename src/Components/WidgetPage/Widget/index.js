import React from 'react';
import './style.css'



export default class Widget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {

    }
    changePage(){
        if (!this.props.disabled){
            window.location.assign(this.props.link);
        }
    }

    render() {
        return (
            <div className={this.props.disabled? "widget-holder + widget-disabled":"widget-holder"} onClick={()=>{this.changePage();}}>
                <img className="widget" src={this.props.image} alt={this.props.text}/>
                <p className="widget">{this.props.text}</p>
            </div>
        );
    }
}