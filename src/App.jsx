import {useEffect, useState} from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import TaskFilter from "./components/TaskFilter";
import { loadTasks, saveTasks } from "./utils/storage";

function Header() {
  return (
    <h1>Task Manager</h1>
  );
}

export default function App() {

  const [tasks, setTasks] = useState(loadTasks)

  const [showOnlyActive, setShowOnlyActive] = useState(false)

useEffect(() => {
    saveTasks(tasks);
}, [tasks]);

  function addTask(text) {
       const newTask = {
        id: Date.now(),
        text,
        completed: false
     };

    setTasks(prev => [...prev, newTask])

    
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(prev => 
      prev.map( task =>
        task.id === id 
          ? {... task, completed: !task.completed}
          : task
    ))
  }

  function toggleShowOnlyActive() {
  setShowOnlyActive(prev => !prev);
  }

  function editTask(id, newText) {
    setTasks(prev => 
      prev.map( task =>
        task.id === id
        ? {...task, text: newText}
        : task
      )
    );
  }


 const visibleTasks = showOnlyActive
    ? tasks.filter(task => !task.completed)
    : tasks;

  return (
    <>
      <Header/>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} onToggle={toggleTask} onEdit={editTask}/>
      <TaskFilter checked={showOnlyActive} onToggle={toggleShowOnlyActive}></TaskFilter>
    </>
  );
}
