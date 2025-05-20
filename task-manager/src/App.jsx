import { useEffect, useState } from 'react'
import './App.css'
import TaskInput from './Components/TaskInput/TaskInput'
import TaskLists from './Components/TaskLists/TaskLists';


function App() {
  const [taskLists,setTaskLists] = useState([])
  console.log(taskLists)
  useEffect(()=>{
    localStorage.setItem("Tasks", JSON.stringify(taskLists))
  },[taskLists])
  
  return (
    <>
      <TaskInput taskLists={taskLists} setTaskLists={setTaskLists}></TaskInput>

      <TaskLists taskLists={taskLists} setTaskLists={setTaskLists}></TaskLists>
    </>
  );
}

export default App
