import { useEffect, useState } from "react";
import "./Taskitem.css"

const Taskitem = ({ taskList,taskLists, setTaskLists }) => {
  const [complete, setComplete] = useState(false);
  const handelComplete = () => {
    setComplete(!complete);
  };

  const handelDelete = (e)=>{
    e.preventDefault()
    const remainingTasks = taskLists.filter((e) => e.id !== taskList.id);
    setTaskLists([...remainingTasks]);
  }

  useEffect(() => {
    const remainingTasks = taskLists.filter((e) => e.id !== taskList.id);
    const completeTask = taskLists.find((e) => e.id === taskList.id);
    if (complete === true) {
      completeTask.completed = true;
      const updatedTasks = [...remainingTasks, completeTask];
      setTaskLists(updatedTasks);
    }
    else{
        completeTask.completed = false;
        const updatedTasks = [...remainingTasks, completeTask];
        setTaskLists(updatedTasks);
    }
  }, [complete])
  return (
    <div id="task-item-container">
      <form>
        <label style={{ color: complete && "green" }}>
          <input
            onChange={handelComplete}
            type="checkbox"
            name="task"
            id="task"
            value={taskList.id}
          />
          {taskList?.title}
        </label>
        <button onClick={handelDelete}>X</button>
      </form>
    </div>
  );
};

export default Taskitem;