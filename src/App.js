import React, { useState, useRef, useEffect } from 'react';
//mock data
//import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

//const LOCAL_STORAGE_KEY = 'todoApp.todos'
const LOCAL_STORAGE_KEY = 'todoApp.toDoList'

function App() {
  
 // const [ toDoList, setToDoList ] = useState(data); //this data comes from json file
 const [ toDoList, setToDoList ] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setToDoList(storedTodos)
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDoList))
  }, [toDoList])


  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
