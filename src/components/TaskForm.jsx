import { useState } from "react";


export default function TaskForm({onAdd}) {

  const [value, setValue] = useState("")

  function handleSubmit() {
     const trimmed = value.trim()
    if (!trimmed) return

    onAdd(trimmed)
    setValue("")
}

  return (
  <form onSubmit={handleSubmit}>
    <input 
      id="taskInput" 
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}>
    </input>

    <button 
      id="addBtn"
     // onClick={handleAdd}
      type="submit">
        Добавить
      </button>
  </form>
  );
}