import { Component } from "react"

class Task extends Component{


  constructor(){
    super()
    this.state={
      task:"react"
    }
  }

  // syntax sugar
  // state = {
  //   task:"angular",
  //   taskList:[{},{}]
  // }
  render(){
    return(
      <>
        <h1>Task Comp {this.state.task}</h1>
      </>
    )
  }
}

export default Task