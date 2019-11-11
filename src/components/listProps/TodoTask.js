import React, { Component } from 'react';

export class TodoTask extends Component {
  setStyle = () => {
    return {
      textDecoration: !this.props.todo.completed ? 'none' : 'line-through'
    };
  };

  setInput = () => {
    // document.getElementById('inp').value = 'Johnny Bravo';
    document.getElementsByTagName('input').value = 'this';
    console.log();
  };
  render() {
    this.setInput();
    return (
      <React.Fragment>
        <input
          checked={this.props.checked}
          type="checkbox"
          onChange={this.props.markActive.bind(this, this.props.todo.id)}
        />
        <span style={this.setStyle()} className="pl-2">
          {this.props.todo.title}
        </span>
      </React.Fragment>
    );
  }
}

export default TodoTask;
