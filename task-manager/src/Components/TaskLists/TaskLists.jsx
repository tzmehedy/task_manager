import React from "react";
import Taskitem from "../Taskitem/Taskitem";
import "./TaskLists.css"

const TaskLists = ({ taskLists, setTaskLists }) => {
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
