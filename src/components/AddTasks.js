import '../App.css';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addToDo} from "../redux/actions/counterToDos";

function AddTasks () {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const todoItem = {
        id: Date.now(),
        title,
        is_complete: false,
    };

    const addingTodo = (e) => {
        e.preventDefault();

        dispatch(addToDo(todoItem));
        setTitle("");
    }

    return (
        <div className="add_tasks_area">
            <p>Todo App</p>
            <div className="input_area_and_button">
                <form onSubmit={addingTodo}>
                    <input type="text"  
                     placeholder="Type your task here..."  
                     value={title} 
                     onChange={(e) => setTitle(e.target.value)} 
                     className="input_type_task"
                    />
                    <button type="submit" className="btn_add_task">Add Task</button>
                </form>
            </div>
        </div>
    );
}
    
export default AddTasks;