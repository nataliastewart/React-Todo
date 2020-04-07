import React from "react";

class TodoForm extends React.Component {
  //constructor with state
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    //update state with each key
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    console.log("STATE", this.state.item);
    this.props.addItem(e, this.state.item);
    this.setState({ item: "" });
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>

        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
