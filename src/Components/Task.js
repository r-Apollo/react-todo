import React, { Component } from "react";
import Date from "./Date";

class Task extends Component {
  constructor(props) {
    super(props)

    this.callDeleteTask = this.callDeleteTask.bind(this)
  }

  callDeleteTask() {
    this.props.deleteTask(this.props.task.key)
  }

  render() {
    return(
      <button onClick={this.callDeleteTask}>
        <div>
          <i className="far fa-circle"></i>
          {this.props.task.text}
        </div>
        <Date />
      </button>
  )
  }
}

export default Task
