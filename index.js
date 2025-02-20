import React, { useState } from "react";
import "./styles.css";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim() === "") return;
        setTasks([...tasks, taskInput]);
        setTaskInput("");
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const editTask = (index) => {
        const newTask = prompt("Edit Task:", tasks[index]);
        if (newTask) {
            const updatedTasks = [...tasks];
            updatedTasks[index] = newTask;
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <div className="input-container">
                <input 
                    type="text" 
                    value={taskInput} 
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="Masukkan Task"
                />
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button className="edit-btn" onClick={() => editTask(index)}>Edit</button>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
