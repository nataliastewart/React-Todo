import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const data = [
  {
    task: "Fold the laundry",
    id: 123,
    completed: false
  },
  {
    task: "Walk the dogs",
    id: 1234,
    completed: false
  },
  {
    task: "Cook the dinner",
    id: 12345,
    completed: false
  }
];

class App extends React.Component {
  //"C" Declared my class

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    //"C" built my constructor function
    super();
    this.state = {
      activities: data
    };
    console.log(this.state.activities);
  }

  //class method to update state
  toggleTodo = id => {
    this.setState({
      activities: this.state.activities.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });

    //update activities
    // this.setState({
    //   activities: newActivities
    // });
  };

  addItem = (e, item) => {
    console.log("ITEM", item);
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    console.log("NEW ITEM", newItem);
    this.setState({
      activities: [...this.state.activities, newItem]
    });
  };

  render() {
    //"R" don't forget about the render
    return (
      <div>
        <h2>Welcome to your Todo App !</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          activities={this.state.activities}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
