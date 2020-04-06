import React from "react";
import TodoList from "./components/TodoList";

const activities = [
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
      activities: activities
    };
    console.log(activities);
  }

  // handleChangeFunction = event =>{
  //   this.setState({event.target.value})
  // }
  render() {
    //"R" don't forget about the render
    return (
      <div>
        <h2>Welcome to your Todo App !</h2>
        <TodoList activities={this.state.activities} />
      </div>
    );
  }
}

export default App;
