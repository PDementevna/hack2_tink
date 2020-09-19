import React from 'react';
import './style.css'
import SaveMoneyContainer from "./SaveMoneyContainer";
import fl_image from "./data/flawery.jpg"
import dom_image from "./data/domovenok.jpg"
let data = [
    {
        title: "На уборке",
        amount: 200,
        image: dom_image,
        shop: "Компания Домовенок"
    },
    {
        title: "На цветах",
        amount: 1000,
        image: fl_image,
        shop: "Магазин Flawery"
    }

]

function renderAdviceList(data){
    const objectsItems = [];
    for (let i=0; i < data.length; i++) {
        objectsItems.push(
            <SaveMoneyContainer key={i} data={data[i]}/>
        );
    }
    return  objectsItems;
}

export default class SaveMoneyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={"page-content"}>
                <h1 className={"page-caption"}>Как копить</h1>
                {renderAdviceList(data)}
                {/*<div className={"save-money-container"}>*/}
                {/*    <h2 className={"save_money_caption"}>На уборке</h2>*/}
                {/*    <img className={"save-money"} src={""} alt={""}/>*/}
                {/*    <p className={"save-money"}>text why</p>*/}
                {/*    <h3 className={"save-money-amount"}>shop</h3>*/}
                {/*    <h3 className={"save-money-shop"}>shop</h3>*/}

                {/*</div>*/}
            </div>
        );
    }
}