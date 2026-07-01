import React from "react";

export default function TaskFilter({checked, onToggle}){

    return (
        <label>
            <input 
                type='checkbox' 
                checked={checked}
                onChange={onToggle}>
            </input>
            Показать невыполненные задачи
        </label>
    );
}