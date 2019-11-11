import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
export class deleteItem extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          variant="btn btn-sm btn-outline-danger "
          size="sm"
          onClick={this.props.deleteItem.bind(this, this.props.todo.id)}
        >
          <span className="d-none d-sm-block">Delete</span>
          <span className="d-block d-sm-none">
            <i className="fa fa-trash" aria-hidden="true"></i>
          </span>
        </Button>
      </React.Fragment>
    );
  }
}

export default deleteItem;
