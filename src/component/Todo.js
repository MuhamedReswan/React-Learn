import React, { Component } from 'react'

export default class Todo extends Component {

  render() {
    return (
      <div>
        <h1>To do Component</h1>
        <h2>{this.props.stringOne}</h2>
      </div>
    )
  }
}
