import React from "react";
import tasklist from "./../styles/tasklist.css"
import Date from "./Date";

const Tasklist = (props) => {
  const { tasks } = props;

  return (
    <div className="tasks">
      {tasks.map((task) => {
          return <button>
            <div>
              <i class="far fa-circle"></i>
              {task.text}
            </div>
            <Date />
            </button>;
        })}
    </div>
  );
};

export default Tasklist
