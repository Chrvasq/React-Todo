import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <div>
      {props.filteredData.length > 0
        ? props.filteredData.map(task => (
            <ToDo
              key={task.id}
              task={task}
              toggleCompleted={props.toggleCompleted}
            />
          ))
        : props.data.map(task => (
            <ToDo
              key={task.id}
              task={task}
              toggleCompleted={props.toggleCompleted}
            />
          ))}
    </div>
  );
};

export default ToDoList;
