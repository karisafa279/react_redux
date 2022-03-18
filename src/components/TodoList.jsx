import React from 'react';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import './TodoList.css'
import { connect } from 'react-redux';
import { removeTodo } from '../storage/actions';

const TodoList = ({ todos = [], onRemovedPressed }) => (
<div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
        <TodoListItem 
        key={index} 
        todo={todo} 
        onRemovedPressed={onRemovedPressed}
        />
    ))} 
</div>
);

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);