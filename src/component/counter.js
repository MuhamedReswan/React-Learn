import React, {Component} from "react";


class Counter extends Component{

    state={
        Counter:0
    }

    onDecrement=()=>{
        this.setState({
            Counter:this.state.Counter-1        })
    console.log("button clicked dec")
}
onIncrement=()=>{
    this.setState({
        Counter:this.state.Counter+1
    })
    console.log("button clicked inc")
}

    render(){
        return (
<div>
    <h2>
        Counter Component
    </h2>
    <button onClick={this.onDecrement} >-</button>
    <h2>{this.state.Counter}</h2>
    <button onClick={this.onIncrement} >+</button>
</div>
        )
    }
}

export default Counter;