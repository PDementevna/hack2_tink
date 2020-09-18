import React, {Component} from 'react';
import Service from './Service';
import { Button } from 'reactstrap';
import img1 from '../img/1.jpg';

class ServiceList extends Component {
    constructor(props) {
        super();
    }
    render () {
        console.log("#####", img1);
        return (
            <>
                <Service category="Топливо" background={img1}></Service>

            </>
        )
    }
}

export default ServiceList