import React, { Component } from "react";

export class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    };
    handleIncrement = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    };
    handleDecrement = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }))
    };


    render() {
        return (
            <div>
                <h1>counter:{this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}