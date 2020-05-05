import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const array = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
  {
    task: "Walk the dogs",
    id: 1528817084448,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoData: array,
      item: "",
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleTodo = (clickedID) => {
    const newArray = this.state.todoData.map((item) => {
      if (item.id === clickedID) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoData: newArray,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addNewItem(this.state.newItem);
    console.log("Handle submit clicked");
  };

  addNewItem = () => {
    const newItem = {
      task: this.state.item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todoData: [...this.state.todoData, newItem],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            handleChange={this.handleChange}
            addNewItem={this.addNewItem}
            handleSubmit={this.handleSubmit}
            todoData={this.state.todoData}
          />
        </div>
        <TodoList todoData={this.state.todoData} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
