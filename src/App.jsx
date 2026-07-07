import {useEffect, useState} from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import TaskFilter from "./components/TaskFilter";
import { loadTasks, saveTasks } from "./utils/storage";
import Header from "./components/Header.jsx";
import useTasks from "./hooks/useTasks";
import ProgressBar from "./components/ProgressBar.jsx";
import "./App.css"

export default function App() {

   const {
      tasks,
      addTask,
      deleteTask,
      toggleTask,
      editTask,
    } = useTasks();
  
  const [showOnlyActive, setShowOnlyActive] = useState(false)

  const visibleTasks = showOnlyActive
      ? tasks.filter(task => !task.completed)
      : tasks;

  const completedTasks = tasks.filter(task => task.completed).length;

  const progress =
    tasks.length === 0
      ? 0
      : (completedTasks / tasks.length) * 100;

  return (
    <div className="app">
      <Header/>

      <TaskForm onAdd={addTask} />

      <TaskList 
          tasks={visibleTasks} 
          onDelete={deleteTask} 
          onToggle={toggleTask} 
          onEdit={editTask}/>

      <TaskFilter 
          checked={showOnlyActive} 
          onChange={setShowOnlyActive}/>

      <ProgressBar 
        tasks={tasks}
        progress={progress}
        completedTasks={completedTasks}/>
    </div>
  );
}
