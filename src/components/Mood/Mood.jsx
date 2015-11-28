import React from 'react';
import './mood.scss';

var Mood = React.createClass({
  propTypes: {
    moodName: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    activeMood: React.PropTypes.string
  },
  render: function() {
    var imageUrl = '/images/' + this.props.moodName + '.svg';
    return (
      <label>
        <input
          type="radio"
          name={this.props.moodName}
          value={this.props.moodName}
          checked={this.props.activeMood === this.props.moodName}
          onClick={this.props.onClick}
        />
        <div className="smiley" style={{backgroundImage: `url(${imageUrl})`}}></div>
      </label>
    );
  }
});

module.exports = Mood;
