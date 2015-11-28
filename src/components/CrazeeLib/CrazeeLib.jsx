import React from 'react';
import MoodList from '../MoodList/MoodList.jsx';
import WordInput from '../WordInput/WordInput.jsx';
import SubmitButton from '../SubmitButton/SubmitButton.jsx';
import './crazee-lib.scss';

var CrazeeLib = React.createClass({
  getInitialState: function () {
    return {
      mood: ''
    };
  },
  handleSubmit: function() {
    debugger;
  },
  setActiveMood: function (mood) {
    this.setState({
      mood
    });
  },
  render: function() {
    return (
      <section className="card">
        <form className="madlib-form" onSubmit={this.handleSubmit}>
          <MoodList onMoodSelected={this.setActiveMood} activeMood={this.state.mood}/>
          <WordInput />
          <SubmitButton />
        </form>
      </section>
    );
  }
});

module.exports = CrazeeLib;
