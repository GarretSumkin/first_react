import React, {Component} from 'react';

class LifeCycleAll extends Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", lebel: "Press"}

        this.press = this.press.bind(this);
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate(){
        console.log("showIdComponentUpdate");
        return true;
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    press(){
        let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
    }

    render() {
        console.log("render()")
        return (
            <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
        );
    }
}

export default LifeCycleAll;