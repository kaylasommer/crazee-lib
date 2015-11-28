import React from 'react';
import Header from './Header/Header.jsx';
import CrazeeLib from './CrazeeLib/CrazeeLib.jsx';

// export default class App extends React.Component {
//   render() {
//     return (
//       <h1>Hey ES6!</h1>
//     );
//   }
// };


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
