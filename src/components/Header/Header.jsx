import React from 'react';
import './header.scss';

var Header = React.createClass({
  propTypes: {
    headerText: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <h1>{this.props.headerText}</h1>
    );
  }
});

module.exports = Header;
