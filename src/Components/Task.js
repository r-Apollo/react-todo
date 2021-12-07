import React, { Component } from "react";
import Date from "./Date";
import "./../styles/task.css"


class Task extends Component {
  constructor(props) {
    super(props)

    this.callDeleteTask = this.callDeleteTask.bind(this)
    this.callChangeTask = this.callChangeTask.bind(this)
  }

  callDeleteTask() {
    this.props.deleteTask(this.props.task.key)
  }

  callChangeTask() {
    this.props.changeTask(this.props.task.key)
  }

  render() {
    return(
      <div className="task">
        <button onClick={this.callDeleteTask}>
          <div>
            <i className="far fa-circle"></i>
            {this.props.task.text}
          </div>
          <Date />
        </button>
        <button className="edit-btn" onClick={this.callChangeTask}>
          <i className="fas fa-edit edit"></i>
        </button>
      </div>
  )
  }
}

export default Task
