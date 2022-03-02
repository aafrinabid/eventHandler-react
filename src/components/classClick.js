import React, { Component } from 'react'

 class classClick extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        message:'hello'
       }
       this.clickHandler=this.clickHandler.bind(this)
     }
 clickHandler() {
  this.setState({
      message:"bye bye dear will sure do miss you "
  })
    
}

  render() {
    return (
      <div>
{/* <button onClick={this.clickHandler}>click me ok</button> */}
<div>{this.state.message}</div>
 <button onClick={this.clickHandler}>click me ok</button> 


      </div>
    )
  }
}

export default classClick