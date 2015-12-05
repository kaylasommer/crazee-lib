import React from 'react';
import MoodList from '../MoodList/MoodList.jsx';
import WordLists from '../WordLists/WordLists.jsx';
import SubmitButton from '../SubmitButton/SubmitButton.jsx';
import './crazee-lib.scss';

var CrazeeLib = React.createClass({
  getInitialState: function () {
    return {
      mood: ''
    };
  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  setActiveMood: function (mood) {
    this.setState({
      mood
    });
  },
  render: function() {
    return (
      <section className='card'>
        <form className="madlib-form" onSubmit={this.handleSubmit}>
          <MoodList onMoodSelected={this.setActiveMood} activeMood={this.state.mood}/>
          <WordLists wordListConfig={data[this.state.mood]}/>
          <SubmitButton />
        </form>
      </section>
    );
  }
});

var data = {
  laughing: { nouns: 4, adverbs: 3, verbs: 2, adjectives: 5},
  happy: { nouns: 4, adverbs: 3, verbs: 2, adjectives: 5},
  sad: { nouns: 4, adverbs: 3, verbs: 2, adjectives: 5}
};

module.exports = CrazeeLib;
