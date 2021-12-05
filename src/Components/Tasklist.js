import React from "react";
import tasklist from "./../styles/tasklist.css"

const Tasklist = (props) => {
  const { tasks } = props;

  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Tasklist
