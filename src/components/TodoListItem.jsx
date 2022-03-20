import React from 'react';
import './TodoListItem.css'
import { markCompleted } from '../storage/actions'

const TodoListItem = ({todo, onRemovedPressed, onMarkCompleted}) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            <button className="completed-button"
            onClick={() => (onMarkCompleted(todo.text))}
            >Mark as completed</button>
            <button className="remove-button"
            onClick={() => onRemovedPressed(todo.text)}
            >Remove</button>
        </div>
    </div>
);


export default TodoListItem;