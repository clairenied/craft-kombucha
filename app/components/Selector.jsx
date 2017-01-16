import React, { Component, PropTypes } from 'react';

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = { val: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ val: evt.target.value });
  }

  render() {
    const { name, className, id, children } = this.props;
    return (
      <select
        name={name}
        value={this.state.val}
        onChange={this.handleChange}
        className={className}
        id={id}
      >
        {children}
      </select>
    );
  }
}

Selector.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};
