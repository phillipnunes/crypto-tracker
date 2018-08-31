import React, { Component } from 'react'
import './style.css'

export default class Container extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>{this.props.content}</div>
    )
  }
}
