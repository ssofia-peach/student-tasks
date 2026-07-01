import { useState } from "react";

export default function TaskItem({task, onDelete, onToggle, onEdit}) {

    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(task.text)

function handleSave() {
    const trimmed = value.trim()
    if(!trimmed) return;

    onEdit(task.id, trimmed);
    setIsEditing(false)
}
    function handleKeyDown(e) {
        if(e.key === "Enter") {
            handleSave()
        }
        if(e.key === "Escape") {
            setValue(task.text);
            setIsEditing(false);
        }
    }
    return (
            <li>
                <input 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    >
                </input> 

                {isEditing? (
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}   
                    /> 
                     ) : (
                    <span onDoubleClick={() => setIsEditing(true)}>
                        {task.text}
                    </span> 
                )}

                <button 
                    onClick={() => onDelete(task.id)}>
                        Удалить
                </button>
            </li>
    )
}