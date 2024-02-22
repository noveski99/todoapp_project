import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import TodoEditForm from './TodoEditForm'
import '../styles/style.css'
import toast from 'react-hot-toast';
function TodoWrapper() {
  const getLocalStorage = JSON.parse(localStorage.getItem('Data')) //get data from local storage as object
  const [todos, setTodos] = useState(getLocalStorage ? getLocalStorage : []);//if local storage has data, if not []
  const [activeTodos, setactiveTodos] = useState([])
  const [completedTodos, setcompletedTodos] = useState([])
  const [category, setCategory] = useState('all')
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(todos)); //set item in localstorage as an array (as string)
  }, [todos])
  useEffect(() => {
    setactiveTodos(todos.filter((todo) => todo.completed === false))
    setcompletedTodos(todos.filter((todo) => todo.completed === true))
  }, [todos])
  const addTodo = (todo) => {
    setTodos([...todos, { id: Math.floor(Math.random() * 10000), task: todo, completed: false, isEditing: false }])//spread previous todos,add new
    setCategory('all')
    toast.success('Todo added!')
  }
  const toggleCompleted = (id) => {
    setTodos(todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item))

  }
  const removeTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id))
    toast('Todo removed!', {
      icon: '👏',
    })
  }
  const toggleEdit = (id) => {
    setTodos(todos.map((item) => {
      return item.id === id ? { ...item, isEditing: !item.isEditing } : item;
    }))
  }
  const editTask = (task, id) => {
    setTodos(todos.map((item) => {
      return item.id === id ? { ...item, task, isEditing: !item.isEditing } : item
    }))
    toast.success('Todo updated!')
  }
  const handeClick = (category) => {
    setCategory(category)
    if (category === 'active' && activeTodos.length === 0) toast('No active todos', {
      position:"bottom-center" 
    });
    if (category === 'completed' && completedTodos.length === 0) toast('No completed todos', {
      position:"bottom-center" 
    });
    if (category === 'all' && todos.length === 0) toast('Todos list is empty, add some!', {
      position:"bottom-center" 
    });
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
      <div className='toggle-todos-wrapper'>
        <button title="See all todos" className="toggle-todos-button" onClick={() => handeClick('all')}>All</button>
        <button title="See active todos" className="toggle-todos-button" onClick={() => handeClick('active')}>Active</button>
        <button title="See completed todos" className="toggle-todos-button" onClick={() => handeClick('completed')}>Completed</button>
      </div>
      <p className='category-status'>{category}</p>
      <div className='todo-list'>
        {
          renderTodos()
        }
      </div>
    </div>
  )
}
export default TodoWrapper