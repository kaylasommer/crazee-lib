import React from 'react';
import Word from '../Word/Word.jsx';

var WordList = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Nouns</h1>
        <Word />
      </div>
    );
  }
});

module.exports = WordList;
