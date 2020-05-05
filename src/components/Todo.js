import React from "react";

const Todo = (props) => {
  console.log("TODO PROPS", props);
  return (
    <div
      className={`item${props.item.completed ? "completed" : ""}`}
      onClick={() => props.toggleTodo(props.item.id)}
      style={props.item.completed ? { textDecoration: "line-through" } : null}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
