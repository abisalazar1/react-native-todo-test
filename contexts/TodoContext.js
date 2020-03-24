import React, { Component } from 'react';

export const TodoContext = React.createContext();

export default class TodoContextProvider extends Component {
  state = {
    todos: [

    ],
  }

  actions = {
    add: (newTodo) => {
      this.setState({
        todos: [
          newTodo,
          ...this.state.todos
        ]
      });
    },
    remove: (todoId) => {
      this.setState({
        todos: this.state.todos.filter(({id}) => id !== todoId),
      });
    }
  }
  render() {
    return (
      <TodoContext.Provider value={{ ...this.state, ...this.actions }}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}