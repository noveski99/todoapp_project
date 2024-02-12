import React from 'react'
import TodoWrapper from './components/TodoWrapper'
import { BsListTask } from "react-icons/bs";
import './styles/style.css'
function App() {
   const date = new Date().toDateString();
   return (
      <>
         <div className='todo-header'>
            <h1>Todo App <BsListTask /> </h1>
         </div>
         <div className='app'>
            <p className='todo-description'>Your Todo's for {date}</p>
            <TodoWrapper />
         </div>
         <div className='todo-footer'>
         © 2024 React Todo-App
         </div>
      </>


   )
}

export default App