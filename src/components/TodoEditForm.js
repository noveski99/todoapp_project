import React, { useState } from 'react'

function TodoEditForm(props) {
    const { item, editTask } = props;
    const [value, setValue] = useState(item.task)
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, item.id)
        setValue('')
    }
    return (

        <form className='todo-edit-form' onSubmit={handleSubmit}>
            <input
                maxLength={20}
                required
                type='text'
                placeholder='Edit Todo'
                name='todo-value'
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <button>Update</button>
        </form>

    )
}

export default TodoEditForm