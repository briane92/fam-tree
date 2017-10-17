import React, { Component } from 'react';
import './App.css';
import RelationshipSelector from './selectionboxes';

class App extends Component {
  render() {
    return (
      <div className="App">
          <button type="button">Add Relationship</button>


        First Name: <input type="text"/> <br />
        Last  Name: <input type="text"/> <br />
          Relationship : <RelationshipSelector />


      </div>
    );
  }
}

export default App;
