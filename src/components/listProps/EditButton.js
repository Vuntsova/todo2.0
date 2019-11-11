import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export class EditButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          variant="outline-warning"
          size="sm"
          // addItem={this.props.addItem}
          // onClick={this.props.editTitle.bind(this, this.props.todo.id)}
        >
          <span className="d-none d-sm-block">
            <Link to="/modal" className="text-warning">
              Edit
            </Link>
          </span>
          <span className="d-block d-sm-none">
            <i className="fa fa-edit" aria-hidden="true"></i>
          </span>
        </Button>
      </React.Fragment>
    );
  }
}

export default EditButton;
