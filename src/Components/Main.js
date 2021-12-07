import { Component } from "react";
import "./../styles/main.css"
import Tasklist from "./Tasklist";

class Main extends Component {

    constructor() {
        super()

        this.state = {
            addingMode: false,
            task: {
                text: "",
                key: null
            },
            tasks: [],
        }

        this.enableInput = this.enableInput.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
        this.cancelTask = this.cancelTask.bind(this)
        this.inTasks = this.inTasks.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.changeTask = this.changeTask.bind(this)
    }

    inTasks(taskText) {
        let found = false
        Array.from(this.state.tasks).forEach((task) => { //foreach doesnt care about retun statement
            if(taskText === task.text) {
                found = true
            }
        })
        return found
    }

    handleChange(e) {
        this.setState({
            task: {
                text: e.target.value,
                key: this.state.tasks.length
            },
        })
    }

    addTask(e) {
        e.preventDefault()
        if(this.state.task.text === "") {
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
                key: null,
            },
            addingMode: false,
        })
    }

    deleteTask(key) {
        this.setState({
            tasks: this.state.tasks.filter((task) => {
                return task.key !== key
            })
        })
    }

    changeTask(key) {
        let newTask = "dummy data"
        for(let i =0; i<this.state.tasks.length; i++) {
            if (this.state.tasks[i].key !== key) {continue}
            else {
                console.log("test")
            }
        }
    }

    cancelTask() {
        this.setState({
            addingMode: false,
            task: {
                text: "",
                key: null,
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
                    <Tasklist tasks={tasks} deleteTask={this.deleteTask} changeTask={this.changeTask} />
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
                <Tasklist tasks={tasks} deleteTask={this.deleteTask} changeTask={this.changeTask}/>
                <div className="adding">
                    <button onClick={this.enableInput} className="adding">
                        <div>
                            <i className="fas fa-plus"></i>
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
