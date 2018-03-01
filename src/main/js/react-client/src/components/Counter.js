import React, {Component} from 'react';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    };

    render(){
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button className="btn" onClick={this.decrement}>-</button>
                    <span>{this.state.counter}</span>
                    <button className="btn" onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

export default Counter;