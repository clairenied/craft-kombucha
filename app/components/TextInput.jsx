import React, { PropTypes } from 'react';

const TextInput = props => ( // eslint-disable-line
  <div className="form-group">
    <label htmlFor={props.htmlFor}>{props.label}</label>
    <input
      type={props.inputType}
      className="form-control"
      id={props.htmlFor}
      onChange={props.onChange}
      value={props.value}
    />
    {
      props.hasError
      ? <small style={{ color: 'red' }}>{props.errorMessage}</small>
      : null
    }
  </div>
);

TextInput.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextInput;
