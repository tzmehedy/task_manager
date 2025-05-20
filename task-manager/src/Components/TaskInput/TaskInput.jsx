import React from 'react';
import "./TaskInput.css";

const TaskInput = ({ taskLists, setTaskLists }) => {
    const handelAddToTheTask = (e)=>{
        e.preventDefault()
        const form = e.target 
        const title = form.title.value 
        const taskInfo = {
            title,
            id: Math.floor(Math.random()*10000),
            completed:false
        }
        setTaskLists([...taskLists,taskInfo])
        form.reset()
    }

  return (
    <div id='taskInput-container'>
      <form id="form-style" onSubmit={handelAddToTheTask}>
        <input type="text" name="title" id="" placeholder="Enter your task title" required/>
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;