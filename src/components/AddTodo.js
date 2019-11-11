import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  getValue = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <input
            id="inp"
            type="text"
            value={this.state.title}
            className="form-control"
            placeholder="Add a todo task here"
            onChange={this.getValue}
          />

          <div className="input-group-append">
            <button
              onClick={this.props.addItem.bind(this, this.state.title)}
              className="btn btn-outline-secondary"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddTodo;
