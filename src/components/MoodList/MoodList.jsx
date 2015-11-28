import React from 'react';
import Mood from '../Mood/Mood.jsx';
import './mood-list.scss';

var Moodlist = React.createClass({
  propTypes: {
    onMoodSelected: React.PropTypes.func.isRequired,
    activeMood: React.PropTypes.string
  },
  render: function() {
    var moods = ['laughing', 'happy', 'sad'];

    var moodNodes = moods.map((mood, index) => {
      return (
        <div key={index}>
          <Mood
            moodName={mood}
            activeMood={this.props.activeMood}
            onClick={() => {
              this.props.onMoodSelected(mood);
            }}
          />
        </div>
      );
    });
    return (
      <div>
        <h3>How do you feel?</h3>
        {moodNodes}
      </div>
    );
  }
});

module.exports = Moodlist;
