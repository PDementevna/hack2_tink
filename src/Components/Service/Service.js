import React, {Component} from 'react';
import { Button } from 'reactstrap';
import s from './service.module.css';

class Service extends Component {
    constructor(props) {
        super();
    }
    render () {
        const backgroundImage = this.props.background;
        return (
            <div style={{maxWidth: 90 + 'px'}}>
                {/*todo: make the common class with general margin + sizes, then separate classes with the margin in blocks*/}
                <div style={{maxWidth: 100 + '%'}}>
                    <Button color="primary" className={s.service_button} style={{backgroundImage: `url(${backgroundImage})`}}>
                    </Button>
                </div>
                <div className={s.service_text} style={{maxWidth: 100 + '%'}}>
                    {this.props.category}
                </div>

            </div>
        )
    }
}

export default Service