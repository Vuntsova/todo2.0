import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
// import EditInput from '../components/EditInput';

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoTask from './listProps/TodoTask';
import DeleteButton from './listProps/DeleteButton';
import EditButton from './listProps/EditButton';

export class TodoItem extends Component {
  checkIfChecked = () => {
    const additions = {
      checked: this.props.todo.completed ? 'checked' : '',
      borderColor: this.props.todo.completed
        ? 'list-group-item border border-warning px-2'
        : 'list-group-item px-2'
    };

    return additions;
  };
  render() {
    const { checked, borderColor } = this.checkIfChecked();
    return (
      <ListGroup.Item key={this.props.todo.id} className={borderColor}>
        <Row>
          <Col xs={8} md={9}>
            {/* <Edit></Edit> */}
            <TodoTask
              addItem={this.props.addItem}
              todo={this.props.todo}
              checked={checked}
              markActive={this.props.markActive}
            />
          </Col>
          <Col className="text-center">
            <EditButton
              editTitle={this.props.editTitle}
              todo={this.props.todo}
              addItem={this.props.addItem}
            />
            <span className="p-2">
              <DeleteButton
                todo={this.props.todo}
                deleteItem={this.props.deleteItem}
              />
            </span>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }
}

export default TodoItem;
