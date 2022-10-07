import React, {Component} from 'react';

class HandoverSeconds extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>Render input</h1>
                <p>{this.props.input}</p>
            </div>
        );
    }
}

export default HandoverSeconds;