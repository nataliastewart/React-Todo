import React from "react";

const TodoForm = (props) => {
  //constructor with state
  // constructor() {
  //   super();
  //   this.state = {
  //     item: "",
  //   };
  // }

  return (
    <form>
      <input
        type="text"
        name="item"
        value={props.item}
        onChange={props.handleChanges}
      />
      <button onClick={props.addItem}>Add Todo</button>

      <button onClick={props.handleClear}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
