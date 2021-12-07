import React from "react";
import "./../styles/tasklist.css"
import Task from "./Task"

const Tasklist = (props) => {
  const { tasks, deleteTask } = props;

  const taskList = tasks.map(task => <Task key={task.key} task={task} deleteTask={deleteTask}/>);

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
};

export default Tasklist
