import React from 'react'
import TodoWrapper from './components/TodoWrapper'
import { BsListTask } from "react-icons/bs";
import './styles/style.css'
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';


function App() {
   const currentDate = new Date();
   const year = currentDate.getFullYear();
   const month = `0${currentDate.getMonth() + 1}`.slice(-2);
   const day = `0${currentDate.getDate()}`.slice(-2);
   const formattedDate = `${year}-${month}-${day}`;
   const [date, setDate] = useState(formattedDate)
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
            <p className='todo-description'> </p>
            <div className='date-container'><p>Todos for {date}</p>
               <input type='date' onChange={e => setDate(e.target.value)}></input></div>
            <TodoWrapper date={date} />
         </div>
         <div className='todo-footer'>
            © 2024 React TodoPal
         </div>
      </>
   )
}
export default App