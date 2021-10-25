//This is the container where all the Todos will be held
import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({toDoList, handleFilter, handleToggle}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button id="clearbutton" style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;