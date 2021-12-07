import { Component } from "react";
import main from "./../styles/main.css"
import Navbar from "./Navbar";
import Tasklist from "./Tasklist";

class Main extends Component {

    constructor() {
        super()

        this.state = {
            addingMode: false,
            task: {
                text: "",
            },
            tasks: [],
        }

        this.enableInput = this.enableInput.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
        this.cancelTask = this.cancelTask.bind(this)
        this.inTasks = this.inTasks.bind(this)
    }

    inTasks(taskText) {
        Array.from(this.state.tasks).forEach((task) => {
            console.log(task.text == taskText);
            if(taskText == task.text) {
                return true
            }
        })
    }

    handleChange(e) {
        this.setState({
            task: {
                text: e.target.value,
            },
        })
    }

    addTask(e) {
        e.preventDefault()
        if(this.state.task.text == "") {
            alert("You need to enter a task!")
            return
        } else if (this.inTasks(this.state.task.text)) {
            alert("Every Task should be unique!")
            return
        }
        this.inTasks(this.state.task)
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {
                text: "",
            },
            addingMode: false,
        })
    }

    cancelTask() {
        this.setState({
            addingMode: false,
            task: {
                text: ""
            },
        })
    }

    enableInput() {
        this.setState({
            addingMode: true,
        })
    }

    render() {
        const { task, tasks } = this.state;
        return(
            this.state.addingMode ? (
                <div className="main">
                    <div className="heading">
                        <h1>Tasks</h1>
                    </div>
                    <Tasklist tasks={tasks} />
                    <form onSubmit={this.addTask} className="adding">
                        <input
                            onChange={this.handleChange}
                            value={task.text}
                            type="text"
                            id="taskInput"
                        />
                        <div>
                            <button type="submit" className="add-task">Add Task</button>
                            <button onClick={this.cancelTask} className="cancel-task">Cancel</button>
                        </div>
                    </form>
                </div>
            ) : (
            <div className="main">
                <div className="heading">
                    <h1>Tasks</h1>
                </div>
                <Tasklist tasks={tasks} />
                <div className="adding">
                    <button onClick={this.enableInput} className="adding">
                        <div>
                            <i class="fas fa-plus"></i>
                            <p>Add Task</p>
                        </div>
                    </button>
                </div>
            </div>
            )
        )
    }
}

export default Main
