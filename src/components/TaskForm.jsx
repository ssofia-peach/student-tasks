import { useState } from "react";
import "../styles/TaskForm_styles.css"

export default function TaskForm({onAdd}) {

  const [value, setValue] = useState("")

  function handleSubmit() {
     const trimmed = value.trim()
    if (!trimmed) return

    onAdd(trimmed)
    setValue("")
}

  return (
  <form onSubmit={handleSubmit} className="form">
    <input 
      id="taskInput" 
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="input">
    </input>

    <button 
      id="addBtn"
      type="submit"
      className="button">
        Добавить
      </button>
  </form>
  );
}