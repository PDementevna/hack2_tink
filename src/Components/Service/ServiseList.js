import React, {Component} from 'react';
import Service from './Service';
import { Container, Row, Col } from 'reactstrap';
import s from '../../servicesList.module.css';
import img1 from '../WidgetPage/img/1.jpg';
import img2 from '../WidgetPage/img/2.jpg';
import img3 from '../WidgetPage/img/3.jpg';

class ServiceList extends Component {
    constructor(props) {
        super();
    }
    render () {
        return (
            <>
                <Container>
                    <Row className={s.rowServices}>
                        <Col>
                            <Service category={this.props.categories[0]} background={img1}></Service>
                        </Col>
                        <Col>
                            <Service category={this.props.categories[1]} background={img2}></Service>
                        </Col>
                        <Col>
                            <Service category={this.props.categories[2]} background={img3}></Service>
                        </Col>
                    </Row>
                    <Row className={s.rowServices}>
                        <Col>
                            <Service category={this.props.categories[3]} background={img1}></Service>
                        </Col>
                        <Col>
                            <Service category={this.props.categories[4]} background={img2}></Service>
                        </Col>
                        <Col>
                            <Service category={this.props.categories[5]} background={img3}></Service>
                        </Col>
                    </Row>
                    <Row className={s.rowServices}>
                        <Col>
                            <Service category={this.props.categories[6]} background={img1}></Service>
                        </Col>
                        <Col>
                            <Service category={this.props.categories[7]} background={img2}></Service>
                        </Col>
                        <Col>
                            <Service category={this.props.categories[8]} background={img3}></Service>
                        </Col>
                    </Row>

                </Container>

            </>
        )
    }
}

export default ServiceList