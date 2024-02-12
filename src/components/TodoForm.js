import React, { useState } from 'react'

function TodoForm(props) {
    const { addTodo } = props;
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('')
    }
    return (
        <div className='todo-form-wrapper'>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input
                    maxLength={20}
                    required
                    type='text'
                    placeholder='Add new'
                    name='todo-value'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />
                <button title='Add todo'>Add</button>
            </form>
        </div>
    )
}

export default TodoForm