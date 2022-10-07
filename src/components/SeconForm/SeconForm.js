import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

class SecondForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            items: [],
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            input : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        })
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange}/>
                    <button type="submit">submit</button>
                </form>

                <p>{this.state.submit}</p>

                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={uuidv4()}>{item}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

export default SecondForm;