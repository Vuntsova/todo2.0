import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export class ModalShow extends Component {
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <React.Fragment>
              <div className="input-group mb-3">
                <input
                  id="inp"
                  type="text"
                  value="sdf"
                  className="form-control"
                  // placeholder="Add a todo task here"
                  onChange={this.getValue}
                />

                <div className="input-group-append">
                  <button
                    // onClick={this.props.addItem.bind(this, this.state.title)}
                    className="btn btn-outline-secondary"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </React.Fragment>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">
            <Link to="/" className="text-white">
              Close
            </Link>
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default ModalShow;
