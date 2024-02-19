import React from 'react'
import TodoWrapper from './components/TodoWrapper'
import { BsListTask } from "react-icons/bs";
import './styles/style.css'
import { Toaster } from 'react-hot-toast';
function App() {
   const date = new Date().toDateString();
   return (
      <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
         <div className='todo-header'>
            <h1><a href="./index.html">TodoPal </a><BsListTask /> </h1>
         </div>
         <div className='app'>
            <p className='todo-description'>Your Todo's for {date}</p>
            <TodoWrapper />
         </div>
         <div className='todo-footer'>
         © 2024 React TodoPal
         </div>
      </>


   )
}

export default App