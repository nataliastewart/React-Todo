import React from "react";

export default function TodoForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="item"
          value={props.item}
          placeholder="Add a todo..."
          onChange={props.handleChange}
        />
        <button type="submit">Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  );
}
