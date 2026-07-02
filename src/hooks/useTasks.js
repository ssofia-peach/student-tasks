import {useEffect, useState} from "react"
import { loadTasks, saveTasks } from "../utils/storage";

const useTasks = () => {
    const [tasks, setTasks] = useState(loadTasks)

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
   
            )
        );
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
     return {
        tasks,
        addTask,
        deleteTask,
        toggleTask,
        editTask,
     };
}

export default useTasks