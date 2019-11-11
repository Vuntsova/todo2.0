import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Todos extends Component {
  render() {
    return (
      <Container>
        <ListGroup>
          {this.props.todos.map(todo => (
            <TodoItem
              addItem={this.props.addItem}
              editTitle={this.props.editTitle}
              markActive={this.props.markActive}
              key={todo.id}
              todo={todo}
              deleteItem={this.props.deleteItem}
            ></TodoItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default Todos;
