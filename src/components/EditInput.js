// import InlineEdit from 'react-edit-inline';
import React from 'react';
// import ReactDOM from 'react-dom';

class EditInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ['wait for ', ' to contain text '],
      isWritable: true,
      field: 'text-key',
      value: 'text-value'
    };

    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { field, value, text } = this.state;
    return (
      <div>
        {this.state.isWritable && (
          <Editable
            text={text}
            field={field}
            value={value}
            onFieldChange={this.onEdit}
            onValueChange={this.onEdit}
          />
        )}
        {!this.state.isWritable && (
          <div>
            Key: {this.state.field} Value: {this.state.value}
          </div>
        )}
        <button
          onClick={() => this.setState({ isWritable: !this.state.isWritable })}
        >
          Toggle
        </button>
      </div>
    );
  }
}

const Editable = ({ text, field, value, onFieldChange, onValueChange }) => (
  <div>
    {text[0]}
    <input name="field" type="text" value={field} onChange={onFieldChange} />
    {text[1]}
    <input name="value" type="text" value={value} onChange={onValueChange} />
  </div>
);

// ReactDOM.render(<EditInput />, document.getElementById('container'));

export default EditInput;
