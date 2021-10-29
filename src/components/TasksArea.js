import '../App.css';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeToDo } from "../redux/actions/counterToDos";
import { markComplete } from "../redux/actions/markCompleteAction";

function Tasks () {
    const  todos  = useSelector((state) => state.toDo);
    const dispatch = useDispatch();

    return (
            <div className="tasks_display_area">
                <p className="tasks_area_heading">Your Task List</p>
                
                {todos.map((task) => (
                <div className="div_tasks">
                        <p className="task_name" key={task.id} style={{ textDecoration: task.is_complete ? "line-through" : "" }}>{task.title}</p>
                        <div className="div_buttons">
                        <button className="btn_remove_task" onClick={() => dispatch(removeToDo(task.id))}>Remove Task</button>
                        <button className="btn_mark_complete" onClick={() => dispatch(markComplete(task.id))}>Mark Complete</button>
                        </div>
                </div>
                ))}
            </div>
    );
}
    
export default Tasks