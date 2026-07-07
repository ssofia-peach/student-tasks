import { useState } from "react";
import "../styles/TaskItem_styles.css"

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
            <li className="task">
                <input 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    >
                </input> 

                {isEditing? (
                    <input
                        type="text"
                        className="edit-input"
                        autoFocus
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}   
                    /> 
                     ) : (
                    <span onDoubleClick={() => setIsEditing(true)}>
                        {task.text}
                    </span> 
                )}

                <button className="delete"
                    onClick={() => onDelete(task.id)}>
                        Удалить
                </button>
            </li>
    )
}