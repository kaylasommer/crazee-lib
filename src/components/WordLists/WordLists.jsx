import React from 'react';
import WordList from '../WordList/WordList.jsx';

var WordLists = React.createClass({
  propTypes: {
    wordListConfig: React.PropTypes.object
  },
  componentWillMount: function() {
    debugger;
  },
  render: function() {
    return (
      <div>
        <h1>{JSON.stringify(this.props.wordListConfig)}</h1>

        <WordList />
      </div>
    );
  }
});

module.exports = WordLists;
