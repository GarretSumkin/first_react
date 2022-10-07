import React, {Component} from 'react';



class LifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            work:"."
        };
        this.changeState = this.changeState.bind(this);
    }

    changeState(){
        this.setState({
          work: "is working!!!"
        })
    }

    render() {
        return (
            <div>
                {this.state.visibility}
                <p>Life cycle of class component {this.state.work}</p>
                <button onClick={this.changeState}>Change state</button>
                <button onClick={this.changeState}>Change state</button>
            </div>
        );
    }
}

export default LifeCycle;