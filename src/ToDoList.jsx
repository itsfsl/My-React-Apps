import { useState } from "react";
import "./ToDoList.css"; // Import the CSS file

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="todo-container">
            <h2 className="todo-title">To Do List</h2>
            <div className="todo-input-container">
                <input 
                    type="text" 
                    value={newTask} 
                    placeholder="Enter a task" 
                    onChange={handleInputChange} 
                    className="todo-input"
                />
                <button onClick={addTask} className="add-button">Add Task</button>
            </div>
            <ol className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        {task}
                        <div className="task-buttons">
                            <button onClick={() => deleteTask(index)} className="task-button delete-button">🗑️</button>
                            <button onClick={() => moveTaskUp(index)} className="task-button up-button">👆</button>
                            <button onClick={() => moveTaskDown(index)} className="task-button down-button">👇</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
