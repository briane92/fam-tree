import React, { Component } from 'react'
import './App.css'
import {MemberGrid} from './member'
import RelationshipForm from './relationship'

class App extends Component {
    constructor () {
        super()
        this.state = {
            relationships: [{
                name: "brian",
                relation: "self"
            },
                {
                name: "Lashelle",
                relation: "Mother"
            },
                {
                    name: "Brooke",
                    relation: "Sister"
                }],
            AddRelationship: false
        }
        this.closeModal = this.closeModal.bind(this);
        this.addRelation = this.addRelation.bind(this);
    }

    closeModal = () => this.setState({AddRelationship:false})
    addRelation = (relation)  => {
        const updatedrelations = [...this.state.relationships, relation]
        this.setState({
            relationships: updatedrelations
        })
    }

  render(
  ) {
    return (
      <div className="App">
          <h1 id="heading"> Family Graph </h1>
          <MemberGrid mems={this.state.relationships}/>
          <button type="button" onClick={()=> this.setState({AddRelationship:true})}>Add Relationship</button>
          <RelationshipForm showForm={this.state.AddRelationship} closeModal = {this.closeModal} addRelation = {this.addRelation}/>

      </div>
    );
  }
}





export default App;
