// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  console.log("TODOLIST PROPS", props);

  return (
    <div className="todo-list">
      {props.activities.map((item) => (
        <Todo
          key={item.id}
          item={item}
          toggleTodo={props.toggleTodo}
          handleTask={props.handleTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
