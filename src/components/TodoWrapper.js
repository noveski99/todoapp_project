import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import TodoEditForm from './TodoEditForm'
import '../styles/style.css'
function TodoWrapper() {
  const getSessionStorage = JSON.parse(sessionStorage.getItem('Data')) //get data from session storage

  const [todos, setTodos] = useState(getSessionStorage ? getSessionStorage : []);//session storage is available then SS, if not []
  const [activeTodos, setactiveTodos] = useState([])
  const [completedTodos, setcompletedTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, { id: Math.floor(Math.random() * 10000), task: todo, completed: false, isEditing: false }])
    setCategory('all')
  }

  useEffect(() => {
    sessionStorage.setItem("Data", JSON.stringify(todos));
  }, [todos])


  useEffect(() => {
    setactiveTodos(todos.filter((todo) => todo.completed === false))
    setcompletedTodos(todos.filter((todo) => todo.completed === true))
  }, [todos])


  const toggleCompleted = (id) => {
    setTodos(todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item))

    setactiveTodos(activeTodos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item))

    setcompletedTodos(completedTodos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item))
 
     
  }
  const removeTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id))
    setcompletedTodos(completedTodos.filter(item => item.id !== id))
    setactiveTodos(activeTodos.filter(item => item.id !== id))
  }
  const toggleEdit = (id) => {
    setTodos(todos.map((item) => {
      return item.id === id ? { ...item, isEditing: !item.isEditing } : item;
    }))
    setactiveTodos(activeTodos.map((item) => {
      return item.id === id ? { ...item, isEditing: !item.isEditing } : item;
    }))
  }
  const editTask = (task, id) => {
    setTodos(todos.map((item) => {
      return item.id === id ? { ...item, task, isEditing: !item.isEditing } : item
    }))
    setactiveTodos(activeTodos.map((item) => {
      return item.id === id ? { ...item, task, isEditing: !item.isEditing } : item
    }))
  }

  const [category, setCategory] = useState('all')
  const handeClick = (category) => {
    setCategory(category)
  }


  const renderTodos = () => {
    let filteredTodos = todos;

    if (category === "active") filteredTodos = activeTodos;
    else if (category === "completed") filteredTodos = completedTodos;
    const list = filteredTodos?.map((item, index) =>
      item.isEditing ? <TodoEditForm item={item} key={index} editTask={editTask} /> :
        <Todo item={item} key={index}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
          toggleEdit={toggleEdit} />
    );
    return list;

  }

  return (
    <div className='todo-wrapper'>
      <TodoForm addTodo={addTodo} />
      <p className='category-status'>{category}</p>
      <div className='todo-list'>
        {
          renderTodos()
        }
      </div>
      <div className='toggle-todos-wrapper'>
        <button title="See all todos" className="toggle-todos-button" onClick={() => handeClick('all')}>All</button>
        <button title="See active todos" className="toggle-todos-button" onClick={() => handeClick('active')}>Active</button>
        <button title="See completed todos" className="toggle-todos-button" onClick={() => handeClick('completed')}>Completed</button>
      </div>
    </div>
  )
}

export default TodoWrapper