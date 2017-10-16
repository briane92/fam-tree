import React, { Component } from 'react';
import './App.css';
import RelationshipSelector from './selectionboxes';

const relationships = ["mother", "father", "sister"]


class App extends Component {
  render() {
    return (
      <div className="App">
        First Name: <input type="text"/> <br />
        Last  Name: <input type="text"/> <br />
          Relationship : <RelationshipSelector />


      </div>
    );
  }
}

export default App;
