import React from 'react'
import TodoWrapper from './components/TodoWrapper'
import './styles/style.css'
function App() {
   const date = new Date().toDateString();
   return (
      <>
         <div className='todo-header'>
            <h1>Todo App</h1>
         </div>
         <div className='app'>
            <p className='todo-description'>Your Todo's for {date}</p>
            <TodoWrapper />
         </div>
      </>


   )
}

export default App