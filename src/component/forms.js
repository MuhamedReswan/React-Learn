import React, { Component } from 'react'

export default class Forms extends Component {


state ={
    firstName:"",
    lastName:""
}


onSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
}


    changeEvent=(event)=>{
this.setState({
    [event.target.name]:event.target.value
})


    }

  render() {
    return (
     <form >
<input type="text" name='firstName' value={this.firstName} onChange={this.changeEvent}/>
<input type="text" name='lastName' value={this.lastName} onChange={this.changeEvent}/>

<button  onClick={this.onSubmit}>Submit</button>
     </form>
    )
  }
}
