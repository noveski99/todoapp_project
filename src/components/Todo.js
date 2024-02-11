import React from 'react'
import '../styles/style.css'

function Todo(props) {
  const { item, index, toggleCompleted, removeTodo, toggleEdit } = props;
  return (
    <div className='todo'>
      <p title={item.completed ? "Unmark" : "Mark as completed"} onClick={() => toggleCompleted(item.id)} className={`${item.completed && 'todo-item-completed'} todo-text`} key={index} required>
        {item.completed ? <i className="todo-item-padding bi bi-check2-square"></i> : <i className="todo-item-padding bi bi-square"></i>}
        {item.task}
      </p>
      <div className="todo-options">
        <i title='Edit' className={`${item.completed && 'todo-options-item-hidden'} todo-options-item edit-icon bi bi-pen h5`} onClick={() => { toggleEdit(item.id) }}></i>
        <i title='Remove' className="todo-options-item remove-icon bi bi-x-circle h5" onClick={() => removeTodo(item.id)}></i>
      </div>

    </div>
  )
}

export default Todo