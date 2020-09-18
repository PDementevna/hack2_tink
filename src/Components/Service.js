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
            <>
                {/*todo: make the common class with general margin + sizes, then separate classes with the margin in blocks*/}
                <div>
                    <Button color="primary" className={s.service_button} style={{backgroundImage: `url(${backgroundImage})`}}>
                    </Button>
                </div>
                <div>
                    {this.props.category}
                </div>

            </>
        )
    }
}

export default Service