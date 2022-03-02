import React, { Component } from 'react'

 class classClick extends Component {
 clickHandler() {
    console.log('fuck you why you did tht again just so you know its hurting me')
    
}

  render() {
    return (
      <div>
<button onClick={this.clickHandler}>click me ok</button>


      </div>
    )
  }
}

export default classClick