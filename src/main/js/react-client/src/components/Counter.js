import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "../actions/actionTypes";

class Counter extends Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    };

    render(){
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button className="btn" onClick={this.decrement}>-</button>
                    <span>{this.props.counter}</span>
                    <button className="btn" onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.counter
});

export default connect(mapStateToProps)(Counter);