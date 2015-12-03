import React from 'react';
import Header from './Header/Header.jsx';
import CrazeeLib from './CrazeeLib/CrazeeLib.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header headerText="CrazeeLib"/>
        <CrazeeLib />
      </div>
    );
  }
});

module.exports = App;
