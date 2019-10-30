import React from "react";

const ToDo = props => {
  const handleClick = () => {
    props.toggleCompleted(props.task.id);
  };
  return (
    <div
      onClick={handleClick}
      className={`item${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default ToDo;
