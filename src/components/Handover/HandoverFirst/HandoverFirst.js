import React, {Component} from 'react';
import HandoverSecond from "../HandoverSecond/HandoverSecond";
import HandoverSeconds from "../HandoverSecond/HandoverSeconds";

class HandoverFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"Web dev blog",
            inputValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }
    render() {
        return (
            <div>
                <HandoverSecond
                input={ this.state.inputValue}
                handleChange={this.handleChange}/>

                <HandoverSeconds input={ this.state.inputValue}/>
            </div>
        );
    }
}

export default HandoverFirst;