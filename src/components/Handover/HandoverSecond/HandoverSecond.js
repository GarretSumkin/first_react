import React, {Component} from 'react';

class HandoverSecond extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>input:</h1>
                <input value={this.props.input} onChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default HandoverSecond;