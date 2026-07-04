import React from "react";
import "../styles/TaskFilter_styles.css"

export default function TaskFilter({checked, onChange}){

    return (
        <label className="label">
            <input 
                type='checkbox' 
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}>
            </input>
            Показать невыполненные задачи
        </label>
    );
}