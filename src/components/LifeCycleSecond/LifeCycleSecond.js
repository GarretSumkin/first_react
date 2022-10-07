import React, {Component} from 'react';



class LifeCycleSecond extends Component {

    constructor(props) {
        super(props);
        this.state = {
            work:"is working!!!",
        };
        this.changeState = this.changeState.bind(this);
        this.hideElement = this.hideElement.bind(this);
    }

    changeState(){
        this.setState({
          work: "is working!!!",
          notWorking:".",
          visibility:false,
        });
    }

    hideElement(){
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }

    render() {
            return (
                <div>
                    {this.state.visibility&&<p>Life cycle of class component</p>}
                    {this.state.visibility&&<button onClick={()=>this.setState({notWorking:this.state.work})}>Change state 1</button>}
                    <button onClick={this.hideElement}>Change state visibility</button>
                    <button onClick={()=>this.setState({visibility:!this.state.visibility})}>Hide or Show</button>
                </div>
            );
            }b
    }

    Component.defaultState = {
        notWorking:".",
        visibility:false,
    }

export default LifeCycleSecond;