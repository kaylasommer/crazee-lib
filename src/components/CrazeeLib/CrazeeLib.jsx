import React from 'react';
import MoodInput from '../MoodInput/MoodInput.jsx';
import WordInput from '../WordInput/WordInput.jsx';
import SubmitButton from '../SubmitButton/SubmitButton.jsx';
import './crazee-lib.scss';

var Madlib = React.createClass({
  handleSubmit: function() {
    debugger;
  },
  render: function() {
    return (
      <section className="card">
        <form className="madlib-form" onSubmit={this.handleSubmit}>
          <MoodInput />
          <WordInput />
          <SubmitButton />
        </form>
      </section>
    );
  }
});

module.exports = Madlib;
