import React, {Component} from 'react';

class Counter extends Component {

    state={
        showCounter:true,
        count:0
    }


    render() {



        return (
            <div>
                {this.props.name}
                {this.props.state}
                <p>Rabotay!!!!</p>
                <button onClick={()=>{
                    this.setState((state,props)=>({count:state.count+1}));
                }}>count</button>
            </div>
        );
    }
}

export default Counter;