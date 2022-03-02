import React, { Component } from 'react'

 class classClick extends Component {
constructor(props) {
  super(props)

  this.state = {
     message:'hello'
  }
}

 clickHandler() {
    this.setState({
        message:'bye bye this will be the time i am saying then you will be seeig my mom saying that i leaving for usa ....psychhhh thats the wrong number'
    })
    
}

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
<button onClick={this.clickHandler.bind(this)}>click me ok</button>


      </div>
    )
  }
}

export default classClick