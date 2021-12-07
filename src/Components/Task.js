import React from "react";
import Date from "./Date";

function Task({task}) {
    return(
        <button>
          <div>
            <i className="far fa-circle"></i>
            {task.text}
          </div>
          <Date />
        </button>
    )
}

export default Task
