import Taskitem from "../Taskitem/Taskitem";
import "./TaskLists.css"

const TaskLists = ({ taskLists, setTaskLists }) => {
    if(taskLists.length === 0) return (
      <div>
        <p>No Task is remaining at this moment</p>
      </div>
    );
  return (
    <div id="task-list-container">
      {taskLists.map((taskList) => (
        <Taskitem
          key={taskList?.id}
          taskList={taskList}
          taskLists={taskLists}
          setTaskLists={setTaskLists}
        ></Taskitem>
      ))}
    </div>
  );
};

export default TaskLists;
