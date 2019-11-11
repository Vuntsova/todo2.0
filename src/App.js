import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/Header';
import EditInput from './components/EditInput';
import uuid from 'uuid';

export class App extends Component {
  //TodoList
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take the trash out',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Call Vince @ 12pm',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Do your homework',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Clean the garage',
        completed: false
      }
    ]
  };
  //Add
  addItem = title => {
    console.log('Adding Item');
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos.concat(newTodo)]
    });
  };
  //Edit
  editTitle = id => {
    console.log('editing the item. This message is from App.js ' + id);
  };
  //Complete
  markActive = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        console.log(todo.completed);
        return todo;
      })
    });
    console.log('Hello from App js' + id);
  };
  //Delete
  deleteItem = id => {
    console.log(id);
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  //Render
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header addItem={this.addItem} />
          <Route
            exact
            path="/"
            render={props => (
              <Todos
                addItem={this.addItem}
                editTitle={this.editTitle}
                deleteItem={this.deleteItem}
                markActive={this.markActive}
                todos={this.state.todos}
              />
            )}
          />
          <Route path="/modal" component={EditInput} />

          {/* <MyParentComponent></MyParentComponent> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
