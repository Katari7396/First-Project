import React, { useState } from 'react'
import './todo.css'

function TodoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
       if (newTask) {
            setTasks([...tasks, {text: newTask}]);
            setNewTask("")
        } 
    };

    const removeTask = (id) => {
        const updateTask = [...tasks];
        updateTask.splice(id,1);
        setTasks(updateTask)
    };

    const complete = (id) => {
        const updatedTasks = [...tasks];
        updatedTasks[id].complete = !updatedTasks[id].complete;
        setTasks(updatedTasks);
    };

    const editTask = (id) => {
        const updatedTasks = [...tasks];
        const newText = prompt('Edit your task:', updatedTasks[id].text);
        if (newText) {
            updatedTasks[id].text = newText;
            setTasks(updatedTasks);
        }
    };

  return (
    <div className='Todo-List'>
        <h2>TO DO LIST 📜</h2>
        <div>
            <input type="text" value={newTask} placeholder='Enter New Task' onChange={(e)=>setNewTask(e.target.value)} />
            <button className='add-btn' onClick={addTask}>ADD TASK</button>

            <ol>
                {tasks.map((task,id)=>(
                    <li key={id}>
                        {task.text}
                        <button onClick={() => complete(id)}>{task.complete ? 'NOT' : 'COMPLETE'}</button>
                        <button onClick={() => editTask(id)}>Edit</button>
                        <button onClick={() => removeTask(id)}>REMOVE TASK</button>
                    </li>
                ))}
            </ol>
        </div>
      
    </div>
  )
}

export default TodoList
