import React from "react";

export default function TaskFilter({checked, onChange}){

    return (
        <label>
            <input 
                type='checkbox' 
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}>
            </input>
            Показать невыполненные задачи
        </label>
    );
}