// modules/About.js
import React from 'react'

export default React.createClass({
  render() {
    return (<div>{this.props.params.repoName}</div>)
  }
})