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
         message:'goodbye'
     })
    
}

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
{/* <button onClick={this.clickHandler.bind(this)}>click me ok</button> */}
<button onClick={()=>this.clickHandler()}>click me ok</button>



      </div>
    )
  }
}

export default classClick