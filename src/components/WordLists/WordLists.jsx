import React from 'react';
import WordList from '../WordList/WordList.jsx';

var WordLists = React.createClass({
  propTypes: {
    selectedMood: React.PropTypes.string
  },
  setActiveWordList: function () {
    var wordList = getWordListTypes(this.props.selectedMood);
  },
  getWordListTypes: function (mood) {
    if(!mood) {
      return;
    }
    var rtn;
    switch (mood) {
      case 'laughing':
        console.log(crazeeLibOptions[0].laughing);
        rtn = crazeeLibOptions[0].laughing;
        break;
      case 'happy':
        console.log('happy');
        rtn = crazeeLibOptions[1].happy;
        break;
      case 'sad':
        console.log('sad');
        rtn = crazeeLibOptions[2].sad;
        break;
      default:
        rtn = crazeeLibOptions[1].happy;
        break;
    }
    return rtn;
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.selectedMood}</h1>
        <h1>{this.props.wordListConfig}</h1>

        <WordList />
      </div>
    );
  }
});

var crazeeLibOptions = [
  {
    'laughing': [
      {
        'type': 'noun',
        'amount': 4
      },
      {
        'type': 'verb',
        'amount': 3
      },
      {
        'type': 'adverb',
        'amount': 2
      },
      {
        'type': 'adjective',
        'amount': 4
      }
    ]
  },
  {
    'happy': [
      {
        'type': 'noun',
        'amount': 3
      },
      {
        'type': 'verb',
        'amount': 1
      },
      {
        'type': 'adverb',
        'amount': 2
      },
      {
        'type': 'adjective',
        'amount': 4
      }
    ]
  },
  {
    'sad': [
      {
        'type': 'noun',
        'amount': 3
      },
      {
        'type': 'verb',
        'amount': 5
      },
      {
        'type': 'adverb',
        'amount': 4
      },
      {
        'type': 'adjective',
        'amount': 2
      }
    ]
  }
];

module.exports = WordLists;
