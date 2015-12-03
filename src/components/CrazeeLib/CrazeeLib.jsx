import React from 'react';
import MoodList from '../MoodList/MoodList.jsx';
import WordLists from '../WordLists/WordLists.jsx';
import SubmitButton from '../SubmitButton/SubmitButton.jsx';
import './crazee-lib.scss';

var CrazeeLib = React.createClass({
  getInitialState: function () {
    return {
      mood: '',
      wordListConfig: ''
    };
  },
  configureWordList: function (mood) {
    if(!mood) {
      return;
    }
    var rtn;
    switch (mood) {
      case 'laughing':
        rtn = data[0];
        break;
      case 'happy':
        rtn = data[1];
        break;
      case 'sad':
        rtn = data[2];
        break;
      default:
        rtn = data[1];
        break;
    }
    var whatType = typeof rtn;
    console.log(whatType + '' + rtn);

    this.setState({
      wordListConfig: rtn
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
  },
  setActiveMood: function (mood) {
    this.setState({
      mood
    });
    this.configureWordList(mood);
  },
  render: function() {
    return (
      <section className='card'>
        <form className="madlib-form" onSubmit={this.handleSubmit}>
          <MoodList onMoodSelected={this.setActiveMood} activeMood={this.state.mood}/>
          <WordLists wordListConfig={this.state.wordListConfig}/>
          <SubmitButton />
        </form>
      </section>
    );
  }
});

var data = [
  {mood:'laughing', types:[{nouns:4}, {adverbs:3}, {verbs:2}, {adjectives: 5}]},
  {mood:'happy', types:[{nouns:4}, {adverbs:3}, {verbs:2}, {adjectives: 5}]},
  {mood:'sad', types:[{nouns:4}, {adverbs:3}, {verbs:2}, {adjectives: 5}]}
];

module.exports = CrazeeLib;
