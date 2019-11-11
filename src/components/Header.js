import React, { Component } from 'react';
import AddTodo from './AddTodo';

export class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">ToDo List</h1>
          <p className="lead">
            Create your list of tasks for the day or the week here
          </p>
          <AddTodo addItem={this.props.addItem} />
        </div>
      </div>
    );
  }
}

export default Header;
