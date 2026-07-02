import {useEffect, useState} from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import TaskFilter from "./components/TaskFilter";
import { loadTasks, saveTasks } from "./utils/storage";
import Header from "./components/Header";
import useTasks from "./hooks/useTasks";

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

  return (
    <>
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
    </>
  );
}
