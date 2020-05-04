import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"



const array = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
    {
    task: 'Walk the dogs',
    id: 1528817084448,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoData: array
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm />
        </div>
        <TodoList todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
