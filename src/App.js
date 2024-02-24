import React from 'react'
import TodoWrapper from './components/TodoWrapper'
import { BsListTask } from "react-icons/bs";
import './styles/style.css'
import { Toaster } from 'react-hot-toast';
function App() {
   return (
      <>
         <Toaster
            position="bottom-center"
            reverseOrder={false}
         />
         <div className='app'>
         <div className='todo-header'>
            <h1><a href="./index.html">TodoPal </a><BsListTask /> </h1>
         </div>
            <TodoWrapper />
         </div>
         <div className='todo-footer'>
            © 2024 React TodoPal
         </div>
      </>
   )
}
export default App